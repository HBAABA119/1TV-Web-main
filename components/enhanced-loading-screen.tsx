"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import * as THREE from "three"

interface Particle {
  position: THREE.Vector3
  velocity: THREE.Vector3
  life: number
  maxLife: number
}

export default function EnhancedLoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const cameraRef = useRef<THREE.PerspectiveCamera>()
  const cubeRef = useRef<THREE.Mesh>()
  const particlesRef = useRef<Particle[]>([])
  const frameRef = useRef<number>()
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!canvasRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      antialias: true, 
      alpha: true 
    })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

    sceneRef.current = scene
    rendererRef.current = renderer
    cameraRef.current = camera

    // Enhanced cube with glassmorphism
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.9,
      transparent: true,
      opacity: 0.8,
      thickness: 0.5,
      envMapIntensity: 1,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    })

    const cube = new THREE.Mesh(geometry, material)
    cube.castShadow = true
    cube.receiveShadow = true
    scene.add(cube)
    cubeRef.current = cube

    // Dynamic lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    scene.add(directionalLight)

    const pointLight1 = new THREE.PointLight(0x00ffff, 0.8, 10)
    pointLight1.position.set(-3, 2, 3)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xff00ff, 0.8, 10)
    pointLight2.position.set(3, -2, -3)
    scene.add(pointLight2)

    camera.position.z = 8

    // Initialize particles
    const particleCount = 100
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
        life: Math.random(),
        maxLife: 1 + Math.random() * 2
      })
    }

    // Particle system
    const particleGeometry = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    const particleColors = new Float32Array(particleCount * 3)
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3))

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    })

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particleSystem)

    // Animation loop
    let startTime = Date.now()
    const animate = () => {
      const currentTime = Date.now()
      const elapsed = (currentTime - startTime) / 1000
      const progress = Math.min(elapsed / 3, 1) // 3 second loading

      setProgress(progress)

      if (cubeRef.current) {
        cubeRef.current.rotation.x = elapsed * 0.5
        cubeRef.current.rotation.y = elapsed * 0.7
        cubeRef.current.rotation.z = elapsed * 0.3
        
        // Pulsing effect
        const scale = 1 + Math.sin(elapsed * 2) * 0.1
        cubeRef.current.scale.setScalar(scale)
      }

      // Update particles
      const positions = particleGeometry.attributes.position.array as Float32Array
      const colors = particleGeometry.attributes.color.array as Float32Array

      particlesRef.current.forEach((particle, i) => {
        particle.position.add(particle.velocity)
        particle.life += 0.01

        if (particle.life > particle.maxLife) {
          particle.position.set(
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20
          )
          particle.life = 0
        }

        positions[i * 3] = particle.position.x
        positions[i * 3 + 1] = particle.position.y
        positions[i * 3 + 2] = particle.position.z

        const intensity = 1 - (particle.life / particle.maxLife)
        colors[i * 3] = intensity
        colors[i * 3 + 1] = intensity * 0.5
        colors[i * 3 + 2] = intensity
      })

      particleGeometry.attributes.position.needsUpdate = true
      particleGeometry.attributes.color.needsUpdate = true

      // Dynamic lighting animation
      pointLight1.position.x = Math.sin(elapsed) * 3
      pointLight1.position.y = Math.cos(elapsed * 1.5) * 2
      
      pointLight2.position.x = Math.cos(elapsed * 0.8) * 3
      pointLight2.position.z = Math.sin(elapsed * 1.2) * 3

      renderer.render(scene, camera)

      if (progress >= 1) {
        setTimeout(() => {
          setIsVisible(false)
          onComplete?.()
        }, 500)
      } else {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      renderer.dispose()
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
          />
          
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider mb-4">
                ONE TRUE VISION
              </h1>
              <div className="w-64 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6" />
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="relative w-64 h-2 bg-white/10 rounded-full mx-auto overflow-hidden"
            >
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress * 100}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="text-white/60 text-sm uppercase tracking-[0.3em] mt-4"
            >
              {Math.round(progress * 100)}% LOADED
            </motion.p>
          </div>

          {/* Ambient overlay effects */}
          <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-purple-500/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}