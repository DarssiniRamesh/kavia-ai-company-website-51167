"use client";

// PUBLIC_INTERFACE
import React from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" }
];

const socialLinks = [
  { name: "Twitter", href: "#", icon: (<svg width="24" height="24" fill="currentColor"><path d="M22,5.8c-0.8,0.4-1.6,0.7-2.4,0.8c0.9-0.6,1.6-1.4,2-2.5c-0.8,0.5-1.7,0.9-2.6,1.1c-0.8-0.8-2.1-1.3-3.2-1.3c-2.5,0-4.2,2.1-3.7,4.6C7.3,8.6,4.9,7.4,3.2,5.5c-0.6,1-0.3,2.4,0.8,3.1C3.5,8.6,2.8,8.4,2.2,8.1c0,1.3,0.9,2.5,2.3,2.8C4,11,3.7,11,3.5,11c-0.2,0-0.4,0-0.6-0.1c0.4,1.2,1.6,2,3,2c-1.1,0.9-2.5,1.4-4,1.2C2.1,15.1,4.2,15.7,6.5,15.7c7.5,0,11.6-6.3,11.6-11.7c0-0.2,0-0.3,0-0.5C20.9,7.4,21.6,6.7,22,5.8z"/></svg>) },
  { name: "LinkedIn", href: "#", icon: (<svg width="24" height="24" fill="currentColor"><path d="M17,2H7C4.2,2,2,4.2,2,7v10c0,2.8,2.2,5,5,5h10c2.8,0,5-2.2,5-5V7C22,4.2,19.8,2,17,2z M8.6,19.3h-3v-9h3V19.3z   M7.1,9.6c-1,0-1.7-0.8-1.7-1.7C5.4,7,6.1,6.2,7.1,6.2c1,0,1.7,0.8,1.7,1.7C8.8,8.8,8.1,9.6,7.1,9.6z M19.3,19.3h-3v-4.7   c0-1.1,0-2.6-1.6-2.6c-1.6,0-1.9,1.2-1.9,2.5v4.8h-3v-9h2.9v1.2h0c0.4-0.8,1.5-1.6,3.1-1.6c3.3,0,3.9,2.2,3.9,5.1V19.3z"/></svg>) }
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <span>KAVIA <span style={{color:"#ff9900"}}>AI</span></span>
        </div>
        <div className="footer-nav">
          {navLinks.map(link =>
            <Link key={link.name} href={link.href} className="footer-link">{link.name}</Link>
          )}
        </div>
        <div className="footer-social">
          {socialLinks.map(link =>
            <a key={link.name} href={link.href} className="footer-social-icon" aria-label={link.name}>
              {link.icon}
            </a>
          )}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} KAVIA AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
