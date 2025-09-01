"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import CartIcon from "./cart-icon"

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="bg-black border-b border-gray-900 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="logo">
            <Link href="/" className="block">
              <Image
                src="/images/1TV_LOGO.png"
                alt="One True Vision"
                width={100}
                height={50}
                className="w-auto h-auto max-w-[100px] hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 list-none p-0 m-0">
              <li>
                <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/shop" className={`nav-link ${isActive("/shop") ? "active" : ""}`}>
                  SHOP
                </Link>
              </li>
              <li>
                <Link href="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/team" className={`nav-link ${isActive("/team") ? "active" : ""}`}>
                  TEAM
                </Link>
              </li>
              <li>
                <Link href="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center">
            <CartIcon />
          </div>
        </div>

        <nav className="md:hidden mt-6 pt-6 border-t border-gray-900">
          <ul className="flex flex-wrap justify-center gap-6 list-none p-0 m-0">
            <li>
              <Link href="/" className={`nav-link text-sm ${isActive("/") ? "active" : ""}`}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="/shop" className={`nav-link text-sm ${isActive("/shop") ? "active" : ""}`}>
                SHOP
              </Link>
            </li>
            <li>
              <Link href="/about" className={`nav-link text-sm ${isActive("/about") ? "active" : ""}`}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/team" className={`nav-link text-sm ${isActive("/team") ? "active" : ""}`}>
                TEAM
              </Link>
            </li>
            <li>
              <Link href="/contact" className={`nav-link text-sm ${isActive("/contact") ? "active" : ""}`}>
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
