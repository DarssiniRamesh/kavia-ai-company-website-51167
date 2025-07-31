"use client";

// PUBLIC_INTERFACE
import React from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" }
];

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <div className="navbar-logo">
          <Link href="/"><span>KAVIA <span style={{color:"#ff9900"}}>AI</span></span></Link>
        </div>
        <div className="navbar-links">
          {navLinks.map(link =>
            <Link key={link.name} href={link.href} className="navbar-link">{link.name}</Link>
          )}
        </div>
        <div>
          <Link href="/login" className="login-btn">Login</Link>
        </div>
      </nav>
    </header>
  );
}
