import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#", hasDropdown: true },
  { label: "Join as Instructor", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-[#041A35] via-[#082B52] to-[#051b36]
 text-white">
      <nav
        className="mx-auto flex min-h-[88px] max-w-7xl items-center justify-between px-6 lg:px-10"
        aria-label="Main navigation"
      >
        {/* Left side */}
        <div className="flex items-center gap-12">
          {/* Logo */}
          <a
            href="/"
            className="flex shrink-0 items-center"
            aria-label="Kanun Network home"
          >
            <div className="flex items-center gap-1">
              <span className="text-[38px] font-bold leading-none tracking-tight text-[#D4A017]">
                KN
              </span>

              <span className="hidden text-[10px] font-semibold uppercase leading-[11px] tracking-[0.08em] text-white sm:block">
                Kanun
                <br />
                Network
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1.5 whitespace-nowrap text-[13px] font-medium tracking-[0.01em] text-white transition-colors duration-200 hover:text-[#D4A017]"
              >
                {item.label}

                {item.hasDropdown && (
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden items-center gap-7 lg:flex">
          <a
            href="#"
            className="text-[13px] font-medium text-white transition-colors duration-200 hover:text-[#D4A017]"
            lang="ar"
            dir="rtl"
          >
            العربية
          </a>

          <a
            href="/login"
            className="inline-flex items-center gap-2 rounded-[5px] bg-[#D4A017] px-6 py-3 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#BD8C0F]"
          >
            Login

            <span
              className="text-lg leading-none"
              aria-hidden="true"
            >
              ›
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-md p-2 text-white hover:bg-white/10 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {isMobileMenuOpen ? (
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="border-t border-white/10 px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-1 pt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-white hover:bg-white/10 hover:text-[#D4A017]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div className="mt-3 border-t border-white/10 pt-4">
              <a
                href="#"
                className="block px-3 py-3 text-sm font-medium text-white hover:text-[#D4A017]"
                lang="ar"
                dir="rtl"
              >
                العربية
              </a>

              <a
                href="/login"
                className="mt-2 flex items-center justify-center gap-2 rounded-[5px] bg-[#D4A017] px-6 py-3 text-sm font-semibold text-white hover:bg-[#BD8C0F]"
              >
                Login
                <span aria-hidden="true">›</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
