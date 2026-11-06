"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import LanguageSwitch from "@/components/LanguageSwitch";
import ThemeToggle from "@/components/ThemeToggle";
import { getDict, localePath, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

export default function Header({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: `${localePath(locale)}#proyectos`, label: dict.nav.projects },
    { href: `${localePath(locale)}#sobre-mi`, label: dict.nav.about },
    { href: `${localePath(locale)}#experiencia`, label: dict.nav.experience },
    { href: `${localePath(locale)}#stack`, label: dict.nav.stack },
    { href: `${localePath(locale)}#servicios`, label: dict.nav.services },
    { href: `${localePath(locale)}#contacto`, label: dict.nav.contact },
  ];

  const moreLinks = [
    { href: `${localePath(locale)}/privacidad`, label: dict.nav.privacy },
    { href: `${localePath(locale)}/terminos`, label: dict.nav.terms },
    { href: `${localePath(locale)}/blog`, label: dict.nav.blog },
    { href: `${localePath(locale)}#contacto`, label: dict.hero.downloadCv, external: true },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileMoreOpen(false);
  }, [pathname]);

  // Click outside to close desktop dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  function handleCvDownload() {
    fetch(site.cvPath, { method: "HEAD" })
      .then((res) => {
        if (!res.ok) {
          alert(dict.hero.cvNotice);
        } else {
          window.open(site.cvPath, "_blank");
        }
      })
      .catch(() => {
        alert(dict.hero.cvNotice);
      });
  }

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="bar">
        <Link href={localePath(locale)} className="brand" aria-label={dict.brandHome}>
          <span className="brand-mark">
            <img src="/orion-logo.png" alt="ORION" width={34} height={34} />
          </span>
          <div className="brand-text">
            <span className="brand-name">{site.name}</span>
            <span className="brand-role">{site.role}</span>
          </div>
        </Link>

        <nav className="nav-desktop" aria-label="Navegación principal">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}

          <div className="nav-dropdown" ref={dropdownRef}>
            <button
              type="button"
              className={`nav-dropdown-toggle ${dropdownOpen ? "is-active" : ""}`}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              aria-label="Más opciones"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <span>{dict.nav.more}</span>
              <svg
                className={`nav-dropdown-chevron ${dropdownOpen ? "is-open" : ""}`}
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <div className={`nav-dropdown-menu ${dropdownOpen ? "is-open" : ""}`} role="menu">
              {moreLinks.map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className="nav-dropdown-item"
                  onClick={() => setDropdownOpen(false)}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  role="menuitem"
                >
                  <span className="nav-dropdown-item-bullet" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="header-controls">
          <ThemeToggle
            labelLight={dict.theme.toggleLight}
            labelDark={dict.theme.toggleDark}
          />
          <LanguageSwitch locale={locale} />
          <button
            type="button"
            className="btn btn-ghost btn-sm header-cv-btn"
            onClick={handleCvDownload}
            aria-label={dict.hero.downloadCv}
          >
            <span>{dict.nav.cv}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </button>
          <Link className="btn btn-primary btn-sm header-cta" href={`${localePath(locale)}#contacto`}>
            {dict.hero.ctaContact}
          </Link>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Abrir menú de navegación"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" className={`nav-mobile ${mobileOpen ? "is-open" : ""}`} aria-label="Menú móvil">
        {links.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
            {item.label}
          </Link>
        ))}

        <div className="nav-mobile-dropdown">
          <button
            type="button"
            className="nav-mobile-dropdown-toggle"
            aria-expanded={mobileMoreOpen}
            aria-label="Más opciones"
            onClick={() => setMobileMoreOpen((prev) => !prev)}
          >
            <span>{dict.nav.more}</span>
            <svg
              className={`nav-dropdown-chevron ${mobileMoreOpen ? "is-open" : ""}`}
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className={`nav-mobile-dropdown-menu ${mobileMoreOpen ? "is-open" : ""}`}>
            {moreLinks.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="nav-mobile-dropdown-item"
                onClick={() => setMobileOpen(false)}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="nav-mobile-actions">
          <button
            type="button"
            className="btn btn-ghost btn-block"
            onClick={() => {
              setMobileOpen(false);
              handleCvDownload();
            }}
          >
            {dict.hero.downloadCv}
          </button>
          <Link
            className="btn btn-primary btn-block"
            href={`${localePath(locale)}#contacto`}
            onClick={() => setMobileOpen(false)}
          >
            {dict.hero.ctaContact}
          </Link>
        </div>
      </nav>
    </header>
  );
}
