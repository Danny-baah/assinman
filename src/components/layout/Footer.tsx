import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#070f0b] text-white/50 border-t border-white/5">

      {/* ── Upper footer ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">

          {/* Brand — 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <Link
              href="/"
              className="flex items-center gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded-sm w-fit"
              aria-label="Assinman Alumni Network — Home"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 ring-1 ring-white/15 shadow-sm">
                <Image
                  src="/assets/download.jpeg"
                  alt="AAN logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-white group-hover:text-[#c59b4b] transition-colors leading-tight">
                  Assinman Alumni Network
                </span>
                <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6aab7a] mt-1">
                  AAN · United in Excellence
                </span>
              </div>
            </Link>

            <p className="text-[14px] sm:text-[15px] text-white/60 max-w-sm leading-relaxed font-light">
              Connecting alumni, fostering fellowship, and building a legacy of
              excellence together.
            </p>

            {/* Thin rule */}
            <div className="h-px bg-white/10 max-w-sm" />

            <p className="text-[13px] sm:text-[14px] text-white/40 tracking-wide font-light">
              Assinman, Central Region, Ghana
            </p>
          </div>

          {/* Navigate — 2 cols */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.2em] text-white/80">
              Navigate
            </h4>
            <ul className="space-y-3.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/mission-vision" },
                { label: "Membership", href: "/why-join-us" },
                { label: "Events", href: "/upcoming-events" },
                { label: "News", href: "/news" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[14px] sm:text-[15px] text-white/55 hover:text-white transition-colors duration-200 block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Membership — 2 cols */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.2em] text-white/80">
              Membership
            </h4>
            <ul className="space-y-3.5">
              {[
                { label: "Why Join Us", href: "/why-join-us" },
                { label: "Register", href: "/register" },
                { label: "Pay Dues", href: "/pay-dues" },
                { label: "Donations", href: "/donations" },
                { label: "Constitution", href: "/constitution" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[14px] sm:text-[15px] text-white/55 hover:text-white transition-colors duration-200 block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — 3 cols */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.2em] text-white/80">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+233240000000"
                  className="flex items-center gap-3 text-[14px] sm:text-[15px] text-white/55 hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 shrink-0 text-[#6aab7a]" aria-hidden="true" />
                  <span>+233 24 000 0000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@assinmanaan.org.gh"
                  className="flex items-center gap-3 text-[14px] sm:text-[15px] text-white/55 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 shrink-0 text-[#6aab7a]" aria-hidden="true" />
                  <span>info@assinmanaan.org.gh</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-[14px] sm:text-[15px] text-white/55">
                <MapPin className="w-4 h-4 shrink-0 text-[#6aab7a] mt-0.5" aria-hidden="true" />
                <span>Assinman, Ghana</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────── */}
      <div
        className="py-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] sm:text-[13px] text-white/40">
          <p>© 2026 Assinman Alumni Network. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-[#6aab7a] font-medium">AAN</span>
            <span>·</span>
            <span>United in Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
