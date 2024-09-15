import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import Link from "next/link";

import Close from "./icons/Close";
import Tiktok from "./icons/Tiktok";
import Instagram from "./icons/Instagram";
import Facebook from "./icons/Facebook";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter(); // Para obtener la ruta actual

  // Cerrar el menú al cambiar de página
  useEffect(() => {
    const handleRouteChange = () => {
      setMenuOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  // Manejar el evento de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Definimos los enlaces del menú con las rutas y los nombres
  const menuItems = [
    { href: "/about", label: "Who we are", id: "01" },
    { href: "/services", label: "What we do", id: "02" },
    { href: "/contact", label: "Contact us", id: "03" },
  ];

  return (
    <header
      className={`fixed z-50 w-full py-10 px-14 flex items-center justify-between transition-all duration-300`}
    >
      {/* Logo solo visible si no has scrolleado */}
      {!scrolled && (
        <Link className="flex items-center" href="/" legacyBehavior>
          <a>
            <Logo />
          </a>
        </Link>
      )}

      <div className="flex gap-1 items-center ml-auto">
        {/* Botón "Get in touch" solo visible si no has scrolleado */}
        {!scrolled && (
          <Link href="/contact" legacyBehavior>
            <a className="bg-pinkSecondary text-black px-6 py-3 rounded-full italic tracking-tight font-ramillas text-lg hover:bg-pink hover:text-white transition duration-500">
              Get in touch
            </a>
          </Link>
        )}

        {/* Botón del menú hamburguesa */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`text-xl focus:outline-none w-20 h-20 space-y-2 relative z-40 flex flex-col text-center justify-center items-center ${
            scrolled
              ? "bg-main text-white rounded-full border border-white border-opacity-20"
              : ""
          }`}
        >
          <div className="h-[2px] w-[20px] bg-white mx-auto"></div>
          <div className="h-[2px] w-[20px] bg-white mx-auto"></div>
        </button>
      </div>

      {/* Menú Full-Screen */}
      <div
        className={`fixed inset-0 dark:bg-main bg-light flex flex-col justify-center transition-all duration-300 ease-in-out z-40 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="mx-auto flex justify-between w-full h-full">
          {/* Imagen de equipo */}
          <div className="w-[calc(40%+64px)] bg-cover bg-center absolute h-full left-0 top-0 bg-[url('/images/team_menu.jpg')]"></div>

          {/* Sección de menú */}
          <div className="w-3/5  dark:bg-main bg-light ml-auto z-20 rounded-l-[64px] flex flex-col justify-between relative">
            {/* LanguageSwitcher y ThemeToggle en la parte superior derecha */}
            <div className="flex justify-between px-20 py-12">
              <ThemeToggle />
              <div className="flex gap-6">
                <Link href="/contact" legacyBehavior>
                  <a className="bg-pinkSecondary text-black px-6 py-3 rounded-full italic tracking-tight font-ramillas text-lg hover:bg-pink hover:text-white transition duration-500">
                    Get in touch
                  </a>
                </Link>
                {/* Botón de cerrar */}
                <button onClick={() => setMenuOpen(false)} className="text-4xl">
                  <Close />
                </button>
              </div>
            </div>

            <div className="max-w-8xl mx-auto flex flex-col gap-14">
              {/* Elementos de menú mapeados */}
              <ul className="space-y-12 text-7xl tracking-tight">
                {menuItems.map((item) => (
                  <li key={item.id} className="flex space-x-2">
                    <Link href={item.href} legacyBehavior>
                      <a
                        className={`hover:text-pinkSecondary duration-300 font-semibold ${
                          router.pathname === item.href ? "text-green" : ""
                        }`}
                      >
                        {item.label.split(" ")[0]}{" "}
                        <span className="font-extrabold italic font-ramillas text-110">
                          {item.label.split(" ").slice(1).join(" ")}
                        </span>
                      </a>
                    </Link>
                    <span className="text-base italic font-light">
                      {item.id}
                    </span>
                  </li>
                ))}
              </ul>

              <LanguageSwitcher />
            </div>

            {/* Footer con detalles, dentro del bg-main */}
            <footer className="w-full flex items-center text-sm border-t border-white border-opacity-20">
              <div className="flex items-center space-x-2 pr-8 py-8 pl-10 border-r border-white border-opacity-20">
                <Link href="/" legacyBehavior>
                  <a>
                    <Logo width={60} />
                  </a>
                </Link>
              </div>
              <div className="flex items-center justify-between space-x-6 p-8 w-full">
                <Link
                  href="mailto:hello@magismarketing.com"
                  className="opacity-80"
                  legacyBehavior
                >
                  hello@magismarketing.com
                </Link>
                <span className="opacity-80">
                  2617 Bissonnet St #493, Houston, TX 77005
                </span>
                <div className="flex gap-6">
                  {/* Redes sociales */}
                  {[
                    {
                      href: "https://www.instagram.com",
                      icon: <Instagram className="fill-white dark:fill-main" />,
                      label: "Instagram",
                    },
                    {
                      href: "https://www.facebook.com",
                      icon: <Facebook className="fill-white dark:fill-main" />,
                      label: "Facebook",
                    },
                    {
                      href: "https://www.tiktok.com",
                      icon: <Tiktok className="fill-white dark:fill-main" />,
                      label: "Tiktok",
                    },
                  ].map(({ href, icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pinkSecondary"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
