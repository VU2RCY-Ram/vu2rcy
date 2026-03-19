/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const router = useRouter().asPath;
  const [mounted, setMounted] = useState(false);
  const Links = [
    { name: "Work", link: "/work" },
    { name: "Shack", link: "/shack" },
    { name: "Homebrew", link: "/homebrew" },
    { name: "Products", link: "/products" },
    { name: "About", link: "/about" },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const touchRef = useRef();

  const clickHandler = () => {
    setTimeout(() => setOpen(false), 400);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (touchRef.current && !touchRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 70);
    setMounted(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav
      className="top-0 sticky pt-5 z-50 -mt-5"
      style={{ backdropFilter: "blur(4px)" }}
    >
      <div
        ref={touchRef}
        className={`
          relative mx-auto w-[92%] sm:w-[80%] md:w-[85%] lg:w-[72%] xl:w-[62%] max-w-5xl
          font-console z-40 transition-all duration-500 ease-out
          ${isScrolled ? "nav-console-scrolled" : "nav-console"}
        `}
      >
        {/* Subtle frequency grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none rounded-xl opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />

        <div className="relative flex flex-wrap justify-between md:justify-center md:gap-x-4 lg:gap-x-8 items-center py-3 px-5 md:px-6">
          {/* Logo / Call sign */}
          <Link
            href="/"
            className="order-2 md:order-1 flex items-center group min-w-0"
          >
            <span className="nav-callsign font-console tracking-[0.25em] text-xl sm:text-2xl font-semibold">
              VU2RCY
            </span>
          </Link>

          {/* Theme toggle - LED indicator style */}
          <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="order-1 md:order-3 flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 hover:scale-110 nav-theme-btn"
            aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
          >
            {currentTheme === "dark" ? (
              <MdLightMode className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
            ) : (
              <MdDarkMode className="w-5 h-5 md:w-6 md:h-6 text-slate-700" />
            )}
          </button>

          {/* Mobile menu button - radio dial style */}
          <button
            onClick={() => setOpen(!open)}
            className="order-3 md:hidden flex flex-col justify-center items-center w-11 h-11 rounded-lg nav-hamburger"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 rounded-full mt-1 transition-all duration-300 ${
                open ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 rounded-full mt-1 transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>

          {/* Desktop nav links */}
          <ul className="hidden md:flex order-2 md:flex-row md:items-center gap-1 lg:gap-2">
            {Links.map((link) => {
              const isActive = router === link.link || (link.link !== "/" && router.startsWith(link.link));
              return (
                <li key={link.name}>
                  <Link
                    href={link.link}
                    className={`
                      relative px-4 py-2 rounded-md text-sm font-medium tracking-wide
                      transition-all duration-300
                      ${isActive ? "nav-link-active" : "nav-link"}
                    `}
                  >
                    {isActive && (
                      <span
                        className="absolute inset-0 rounded-md nav-link-glow"
                        aria-hidden
                      />
                    )}
                    <span className="relative">{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile nav panel - slide down like a spectrum display */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-out
            ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <ul className="nav-mobile-panel flex flex-col py-4 px-5 gap-1 border-t border-white/10 dark:border-amber-500/20">
            {Links.map((link) => {
              const isActive = router === link.link || (link.link !== "/" && router.startsWith(link.link));
              return (
                <li key={link.name}>
                  <Link
                    href={link.link}
                    onClick={clickHandler}
                    className={`
                      block py-3 px-4 rounded-lg text-sm font-medium tracking-wide
                      transition-colors duration-200
                      ${isActive ? "nav-mobile-active" : "nav-mobile-link"}
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
