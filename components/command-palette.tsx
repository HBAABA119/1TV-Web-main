"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

type Command = {
  id: string
  label: string
  action: () => void
  shortcut?: string
}

export default function CommandPalette() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement | null>(null)

  const commands = React.useMemo<Command[]>(() => [
    { id: "home", label: "Go to Home", action: () => router.push("/") },
    { id: "teams", label: "Open Teams", action: () => router.push("/teams") },
    { id: "live", label: "Open Live Stream", action: () => router.push("/live-stream") },
    { id: "news", label: "Open News", action: () => router.push("/news") },
    { id: "shop", label: "Open Shop", action: () => router.push("/shop") },
    { id: "contact", label: "Contact Us", action: () => router.push("/contact") },
  ], [router])

  const filtered = React.useMemo(
    () =>
      commands.filter((c) =>
        c.label.toLowerCase().includes(query.trim().toLowerCase())
      ),
    [commands, query]
  )

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
      const modKey = isMac ? e.metaKey : e.ctrlKey
      if (modKey && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  React.useEffect(() => {
    if (open) {
      const id = setTimeout(() => inputRef.current?.focus(), 0)
      return () => clearTimeout(id)
    }
  }, [open])

  const onSelect = (cmd: Command) => {
    setOpen(false)
    setQuery("")
    cmd.action()
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[70] grid place-items-start pt-24 px-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="relative w-full max-w-xl mx-auto card-soft">
        <div className="p-3 border-b border-gray-800/80">
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands (e.g., Shop, Teams)"
            className="input-soft"
            aria-label="Command search"
          />
        </div>
        <div className="max-h-80 overflow-auto">
          {filtered.length === 0 ? (
            <div className="px-4 py-6 text-center text-white/60 text-sm">No results</div>
          ) : (
            <ul className="divide-y divide-gray-800/80">
              {filtered.map((cmd) => (
                <li key={cmd.id}>
                  <button
                    type="button"
                    onClick={() => onSelect(cmd)}
                    className="w-full text-left px-4 py-3 hover:bg-white/5 transition-colors text-white"
                  >
                    {cmd.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex items-center justify-between px-4 py-2 text-[11px] tracking-wider uppercase text-white/40">
          <div>Press Enter to confirm</div>
          <div><kbd className="px-1.5 py-0.5 border border-gray-700 rounded">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 border border-gray-700 rounded">K</kbd></div>
        </div>
      </div>
    </div>
  )
}

