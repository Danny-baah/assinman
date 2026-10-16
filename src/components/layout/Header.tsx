"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

/* ── Navigation data — titles only, no descriptions ──────────────────── */
interface NavItem {
  title: string;
  href: string;
}

const aboutLinks: NavItem[] = [
  { title: "Mission & Vision", href: "/about/mission-vision" },
  { title: "Interim Executives", href: "/about/executive-members" },
  { title: "Constitution", href: "/about/constitution" },
];

const membershipLinks: NavItem[] = [
  { title: "Why Join Us", href: "/membership/why-join-us" },
  { title: "Register", href: "/membership/register" },
  { title: "Pay Dues", href: "/membership/pay-dues" },
  { title: "Donations", href: "/membership/donations" },
];

const eventsLinks: NavItem[] = [
  { title: "Upcoming Events", href: "/events/upcoming-events" },
  { title: "Past Events", href: "/events/past-events" },
  { title: "Gallery", href: "/events/gallery" },
];

/* ── Desktop Dropdown Component with Hover Bridge & Full A11y ───────── */
interface DesktopDropdownProps {
  id: string;
  label: string;
  items: NavItem[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  isLight?: boolean;
}

function DesktopDropdown({
  id,
  label,
  items,
  isOpen,
  onOpen,
  onClose,
  isLight = false,
}: DesktopDropdownProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    clearCloseTimeout();
    onOpen();
  };

  const handleMouseLeave = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      onClose();
    }, 120);
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!containerRef.current?.contains(e.relatedTarget as Node)) {
      onClose();
    }
  };

  const handleButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen();
      setTimeout(() => {
        itemRefs.current[0]?.focus();
      }, 20);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      onOpen();
      setTimeout(() => {
        itemRefs.current[items.length - 1]?.focus();
      }, 20);
    } else if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  };

  const handleItemKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    index: number
  ) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % items.length;
      itemRefs.current[nextIndex]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (index - 1 + items.length) % items.length;
      itemRefs.current[prevIndex]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      itemRefs.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      itemRefs.current[items.length - 1]?.focus();
    } else if (e.key === "Escape") {
      e.preventDefault();
      onClose();
      buttonRef.current?.focus();
    } else if (e.key === "Tab") {
      if (e.shiftKey && index === 0) {
        onClose();
      } else if (!e.shiftKey && index === items.length - 1) {
        onClose();
      }
    }
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleBlur}
    >
      <button
        ref={buttonRef}
        id={`nav-trigger-${id}`}
        type="button"
        onClick={() => (isOpen ? onClose() : onOpen())}
        onKeyDown={handleButtonKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls={`nav-dropdown-${id}`}
        className={`group relative flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-medium tracking-[0.04em] transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b4d2e]/40 rounded-sm ${
          isLight
            ? isOpen
              ? "text-[#1b4d2e]"
              : "text-[#11161e]/80 hover:text-[#1b4d2e]"
            : isOpen
            ? "text-white"
            : "text-white/70 hover:text-white"
        }`}
      >
        <span>{label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          } ${
            isLight
              ? isOpen
                ? "text-[#1b4d2e]"
                : "text-[#11161e]/50 group-hover:text-[#1b4d2e]"
              : isOpen
              ? "text-white"
              : "text-white/50 group-hover:text-white"
          }`}
          aria-hidden="true"
        />
        {/* Active indicator bar */}
        <span
          className={`absolute bottom-1 left-4 right-4 h-px transition-opacity duration-200 ${
            isLight ? "bg-[#1b4d2e]" : "bg-white/60"
          } ${
            isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-30"
          }`}
        />
      </button>

      {/* Dropdown Container with zero-gap hover bridge */}
      {isOpen && (
        <div className="absolute left-0 top-full pt-1.5 z-50 min-w-[200px]">
          <div
            id={`nav-dropdown-${id}`}
            role="menu"
            aria-labelledby={`nav-trigger-${id}`}
            className="dropdown-animate rounded-lg overflow-hidden"
            style={
              isLight
                ? {
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(27, 77, 46, 0.14)",
                    boxShadow: "0 14px 36px rgba(17, 22, 30, 0.1)",
                  }
                : {
                    background: "linear-gradient(135deg, #0e2719 0%, #12311f 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                  }
            }
          >
            {/* Top accent highlight */}
            <div
              className="h-[2px]"
              style={{
                background: isLight
                  ? "linear-gradient(to right, #1b4d2e, #c59b4b, #7a1c1c)"
                  : "linear-gradient(to right, rgba(27, 77, 46, 0.2), rgba(255, 255, 255, 0.3), rgba(122, 28, 28, 0.3))",
              }}
            />

            <div className="py-2">
              {items.map((item, idx) => (
                <Link
                  key={item.href}
                  ref={(el) => {
                    itemRefs.current[idx] = el;
                  }}
                  href={item.href}
                  role="menuitem"
                  tabIndex={isOpen ? 0 : -1}
                  onClick={onClose}
                  onKeyDown={(e) => handleItemKeyDown(e, idx)}
                  className={`flex items-center gap-3 px-4 py-2.5 text-[13px] font-medium transition-all duration-150 focus:outline-none group ${
                    isLight
                      ? "text-[#2e3b4b] hover:text-[#1b4d2e] hover:bg-[#1b4d2e]/5 focus:bg-[#1b4d2e]/5 focus:text-[#1b4d2e]"
                      : "text-white/75 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-150 shrink-0 ${
                      isLight
                        ? "bg-[#1b4d2e]/30 group-hover:bg-[#1b4d2e] group-hover:scale-125"
                        : "bg-white/25 group-hover:bg-[#6aab7a] group-focus:bg-[#6aab7a] group-hover:scale-125"
                    }`}
                  />
                  <span className="tracking-[0.02em]">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Header Main Component ────────────────────────────────────────────── */
export function Header({ theme }: { theme?: "dark" | "light" } = {}) {
  const pathname = usePathname();
  const isLight =
    theme === "light" ||
    (!theme && pathname !== "/" && !pathname?.startsWith("/#"));

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        closeDropdown();
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDropdown();
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeDropdown]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMobileGroup = (name: string) =>
    setMobileExpanded((prev) => (prev === name ? null : name));

  return (
    <header
      ref={headerRef}
      className={`nav-animate ${
        isLight
          ? "sticky top-0 inset-x-0 z-50 py-3.5 sm:py-4 transition-all duration-300"
          : `fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out ${
              scrolled ? "py-3" : "py-5"
            }`
      }`}
      style={
        isLight
          ? {
              backgroundColor: "#f8f5ee",
              borderBottom: "1px solid rgba(27, 77, 46, 0.12)",
              boxShadow: "0 2px 14px rgba(17, 22, 30, 0.04)",
            }
          : scrolled
          ? {
              background: "rgba(14, 36, 24, 0.96)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 4px 32px rgba(0,0,0,0.35)",
            }
          : {
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
            }
      }
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* ── Logo ───────────────────────────────────────────────────── */}
        <Link
          href="/"
          className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b4d2e]/40 rounded-sm"
          aria-label="Assinman Alumni Network — Home"
        >
          <div
            className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden transition-all duration-300"
            style={{
              boxShadow: isLight
                ? "0 0 0 2px rgba(27,77,46,0.25)"
                : "0 0 0 2px rgba(255,255,255,0.15), 0 0 0 4px rgba(255,255,255,0.05)",
            }}
          >
            <Image
              src="/assets/download.jpeg"
              alt="Assinman Alumni Network logo"
              fill
              sizes="48px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col gap-0.5">
            <span
              className={`font-editorial text-[15.5px] font-bold tracking-tight leading-none transition-colors duration-200 ${
                isLight
                  ? "text-[#11161e] group-hover:text-[#1b4d2e]"
                  : "text-white group-hover:text-white/90"
              }`}
            >
              Assinman Alumni Network
            </span>
            <span
              className="text-[9.5px] font-semibold tracking-[0.22em] uppercase leading-none"
              style={{
                color: isLight ? "#1b4d2e" : "rgba(255,255,255,0.4)",
              }}
            >
              United in Excellence
            </span>
          </div>
        </Link>

        {/* ── Desktop Navigation ─────────────────────────────────────── */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center"
        >
          <Link
            href="/"
            className={`group relative px-4 py-2.5 text-[13px] font-medium tracking-[0.04em] transition-colors duration-200 focus:outline-none rounded-sm ${
              isLight
                ? "text-[#11161e]/80 hover:text-[#1b4d2e]"
                : "text-white/70 hover:text-white"
            }`}
          >
            Home
            <span
              className={`absolute bottom-1 left-4 right-4 h-px opacity-0 group-hover:opacity-30 transition-opacity duration-200 ${
                isLight ? "bg-[#1b4d2e]" : "bg-white/60"
              }`}
            />
          </Link>

          <DesktopDropdown
            id="about"
            label="About Us"
            items={aboutLinks}
            isOpen={activeDropdown === "about"}
            onOpen={() => setActiveDropdown("about")}
            onClose={closeDropdown}
            isLight={isLight}
          />

          <DesktopDropdown
            id="membership"
            label="Membership"
            items={membershipLinks}
            isOpen={activeDropdown === "membership"}
            onOpen={() => setActiveDropdown("membership")}
            onClose={closeDropdown}
            isLight={isLight}
          />

          <DesktopDropdown
            id="events"
            label="Events"
            items={eventsLinks}
            isOpen={activeDropdown === "events"}
            onOpen={() => setActiveDropdown("events")}
            onClose={closeDropdown}
            isLight={isLight}
          />

          <Link
            href="/news"
            className={`group relative px-4 py-2.5 text-[13px] font-medium tracking-[0.04em] transition-colors duration-200 focus:outline-none rounded-sm ${
              isLight
                ? "text-[#11161e]/80 hover:text-[#1b4d2e]"
                : "text-white/70 hover:text-white"
            }`}
          >
            News
            <span
              className={`absolute bottom-1 left-4 right-4 h-px opacity-0 group-hover:opacity-30 transition-opacity duration-200 ${
                isLight ? "bg-[#1b4d2e]" : "bg-white/60"
              }`}
            />
          </Link>

          <Link
            href="/contact"
            className={`group relative px-4 py-2.5 text-[13px] font-medium tracking-[0.04em] transition-colors duration-200 focus:outline-none rounded-sm ${
              isLight
                ? "text-[#11161e]/80 hover:text-[#1b4d2e]"
                : "text-white/70 hover:text-white"
            }`}
          >
            Contact
            <span
              className={`absolute bottom-1 left-4 right-4 h-px opacity-0 group-hover:opacity-30 transition-opacity duration-200 ${
                isLight ? "bg-[#1b4d2e]" : "bg-white/60"
              }`}
            />
          </Link>
        </nav>

        {/* ── Desktop CTA ────────────────────────────────────────────── */}
        <div className="hidden lg:flex items-center ml-4">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm text-[12.5px] font-bold tracking-[0.1em] uppercase text-white transition-all duration-200 active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b4d2e]/40"
            style={{
              background: "linear-gradient(135deg, #8f2222 0%, #7a1c1c 100%)",
              boxShadow:
                "0 2px 16px rgba(122,28,28,0.45), inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 4px 24px rgba(122,28,28,0.6), inset 0 1px 0 rgba(255,255,255,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 2px 16px rgba(122,28,28,0.45), inset 0 1px 0 rgba(255,255,255,0.12)";
            }}
          >
            Register Now
          </Link>
        </div>

        {/* ── Mobile Controls ────────────────────────────────────────── */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/register"
            className="px-4 py-2 rounded-sm text-[11px] font-bold uppercase tracking-wider text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b4d2e]/40"
            style={{
              background: "linear-gradient(135deg, #8f2222 0%, #7a1c1c 100%)",
            }}
          >
            Register
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            className={`p-2 transition-colors duration-200 cursor-pointer focus:outline-none rounded-sm ${
              isLight
                ? "text-[#11161e] hover:text-[#1b4d2e]"
                : "text-white/70 hover:text-white"
            }`}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile Navigation Panel ──────────────────────────────────── */}
      {mobileOpen && (
        <div
          id="mobile-nav-panel"
          role="navigation"
          aria-label="Mobile navigation"
          className="mobile-menu-animate lg:hidden fixed inset-x-0 top-[60px] bottom-0 overflow-y-auto"
          style={
            isLight
              ? {
                  backgroundColor: "#f8f5ee",
                  borderTop: "1px solid rgba(27, 77, 46, 0.12)",
                }
              : {
                  background: "rgba(10, 24, 16, 0.98)",
                  backdropFilter: "blur(20px)",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                }
          }
        >
          <div className="px-6 py-8 space-y-0 max-w-lg mx-auto">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center py-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors duration-200 border-b focus:outline-none ${
                isLight
                  ? "text-[#11161e] hover:text-[#1b4d2e] border-[#1b4d2e]/10"
                  : "text-white/80 hover:text-white border-white/8"
              }`}
            >
              Home
            </Link>

            {/* About Mobile */}
            <div
              className={`border-b ${
                isLight ? "border-[#1b4d2e]/10" : "border-white/8"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleMobileGroup("about")}
                aria-expanded={mobileExpanded === "about"}
                className={`w-full flex items-center justify-between py-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors cursor-pointer focus:outline-none ${
                  isLight
                    ? "text-[#11161e] hover:text-[#1b4d2e]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <span>About Us</span>
                <span
                  className={`text-sm font-light w-5 text-center ${
                    isLight ? "text-[#1b4d2e]" : "text-white/50"
                  }`}
                >
                  {mobileExpanded === "about" ? "−" : "+"}
                </span>
              </button>
              {mobileExpanded === "about" && (
                <div className="pb-4 pl-4 space-y-1">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 py-2 text-[13px] font-medium transition-colors duration-150 focus:outline-none group ${
                        isLight
                          ? "text-[#4b5867] hover:text-[#1b4d2e]"
                          : "text-white/50 hover:text-white/90"
                      }`}
                    >
                      <span
                        className={`w-1 h-1 rounded-full transition-colors shrink-0 ${
                          isLight
                            ? "bg-[#1b4d2e]/30 group-hover:bg-[#1b4d2e]"
                            : "bg-white/20 group-hover:bg-white/60"
                        }`}
                      />
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Membership Mobile */}
            <div
              className={`border-b ${
                isLight ? "border-[#1b4d2e]/10" : "border-white/8"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleMobileGroup("membership")}
                aria-expanded={mobileExpanded === "membership"}
                className={`w-full flex items-center justify-between py-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors cursor-pointer focus:outline-none ${
                  isLight
                    ? "text-[#11161e] hover:text-[#1b4d2e]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <span>Membership</span>
                <span
                  className={`text-sm font-light w-5 text-center ${
                    isLight ? "text-[#1b4d2e]" : "text-white/50"
                  }`}
                >
                  {mobileExpanded === "membership" ? "−" : "+"}
                </span>
              </button>
              {mobileExpanded === "membership" && (
                <div className="pb-4 pl-4 space-y-1">
                  {membershipLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 py-2 text-[13px] font-medium transition-colors duration-150 focus:outline-none group ${
                        isLight
                          ? "text-[#4b5867] hover:text-[#1b4d2e]"
                          : "text-white/50 hover:text-white/90"
                      }`}
                    >
                      <span
                        className={`w-1 h-1 rounded-full transition-colors shrink-0 ${
                          isLight
                            ? "bg-[#1b4d2e]/30 group-hover:bg-[#1b4d2e]"
                            : "bg-white/20 group-hover:bg-white/60"
                        }`}
                      />
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Events Mobile */}
            <div
              className={`border-b ${
                isLight ? "border-[#1b4d2e]/10" : "border-white/8"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleMobileGroup("events")}
                aria-expanded={mobileExpanded === "events"}
                className={`w-full flex items-center justify-between py-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors cursor-pointer focus:outline-none ${
                  isLight
                    ? "text-[#11161e] hover:text-[#1b4d2e]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <span>Events</span>
                <span
                  className={`text-sm font-light w-5 text-center ${
                    isLight ? "text-[#1b4d2e]" : "text-white/50"
                  }`}
                >
                  {mobileExpanded === "events" ? "−" : "+"}
                </span>
              </button>
              {mobileExpanded === "events" && (
                <div className="pb-4 pl-4 space-y-1">
                  {eventsLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 py-2 text-[13px] font-medium transition-colors duration-150 focus:outline-none group ${
                        isLight
                          ? "text-[#4b5867] hover:text-[#1b4d2e]"
                          : "text-white/50 hover:text-white/90"
                      }`}
                    >
                      <span
                        className={`w-1 h-1 rounded-full transition-colors shrink-0 ${
                          isLight
                            ? "bg-[#1b4d2e]/30 group-hover:bg-[#1b4d2e]"
                            : "bg-white/20 group-hover:bg-white/60"
                        }`}
                      />
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/news"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center py-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors duration-200 border-b focus:outline-none ${
                isLight
                  ? "text-[#11161e] hover:text-[#1b4d2e] border-[#1b4d2e]/10"
                  : "text-white/80 hover:text-white border-white/8"
              }`}
            >
              News
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center py-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors duration-200 border-b focus:outline-none ${
                isLight
                  ? "text-[#11161e] hover:text-[#1b4d2e] border-[#1b4d2e]/10"
                  : "text-white/80 hover:text-white border-white/8"
              }`}
            >
              Contact
            </Link>

            <div className="pt-8 space-y-3">
              <Link
                href="/register"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center py-4 rounded-sm text-[13px] font-bold uppercase tracking-[0.1em] text-white transition-colors duration-200 focus:outline-none"
                style={{
                  background:
                    "linear-gradient(135deg, #8f2222 0%, #7a1c1c 100%)",
                  boxShadow: "0 2px 16px rgba(122,28,28,0.4)",
                }}
              >
                Register Now
              </Link>
              <Link
                href="/pay-dues"
                onClick={() => setMobileOpen(false)}
                className={`w-full flex items-center justify-center py-4 rounded-sm text-[13px] font-semibold uppercase tracking-[0.1em] transition-all duration-200 focus:outline-none ${
                  isLight
                    ? "text-[#11161e] hover:text-[#1b4d2e] border border-[#1b4d2e]/20 bg-white"
                    : "text-white/60 hover:text-white border border-white/12"
                }`}
              >
                Pay Dues
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
