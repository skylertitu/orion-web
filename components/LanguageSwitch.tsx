"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { localeChoices, type Locale } from "@/lib/i18n";

export default function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onDoc(event: MouseEvent) {
      if (!box.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function choose(next: Locale) {
    document.cookie = `orion_locale=${next};path=/;max-age=31536000;samesite=lax`;
    try {
      localStorage.setItem("orion_locale", next);
    } catch {
      /* private mode */
    }
    const parts = pathname.split("/");
    parts[1] = next;
    const search = typeof window !== "undefined" ? window.location.search : "";
    setOpen(false);
    router.replace(`${parts.join("/") || `/${next}`}${search}`, { scroll: false });
  }

  const label = locale === "es" ? "Cambiar idioma" : "Change language";

  return (
    <div className="lang" ref={box}>
      <button
        type="button"
        className="lang-btn"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {locale.toUpperCase()} ▾
      </button>
      {open && (
        <ul className="lang-menu" role="listbox" aria-label={label}>
          {localeChoices.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                role="option"
                aria-selected={item.id === locale}
                onClick={() => choose(item.id)}
              >
                {item.native}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
