import { useRouter } from "next/router";
import LogoAlt from "./LogoAlt";
import Link from "next/link";
import Tiktok from "./icons/Tiktok";
import Instagram from "./icons/Instagram";
import Facebook from "./icons/Facebook";
import Pinterest from "./icons/Pinterest";
import Linkedin from "./icons/Linkedin";
import Youtube from "./icons/Youtube";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import Dev from "./icons/Dev";

function Footer() {
  const router = useRouter();

  // Definimos los elementos del menú con sus respectivas rutas
  const menuItems = [
    { href: "/about", label: "Who we are", id: "01" },
    { href: "/services", label: "What we do", id: "02" },
    { href: "/contact", label: "Contact us", id: "03" },
  ];

  return (
    <footer className="p-12 lg:p-14 flex flex-col items-center">
      <div className="flex flex-col md:flex-row gap-12 justify-between items-center lg:container">
        {/* Sección izquierda */}
        <div className="flex flex-col text-center md:text-left items-center md:items-start space-y-8">
          <LogoAlt />
          <div className="text-base lg:text-lg space-y-8">
            <Link className="opacity-80" href="mailto:hello@magismarketing.com">
              hello@magismarketing.com
            </Link>
            <p className="text-base lg:text-lg  opacity-80 !leading-none">
              2617 Bissonnet St #493,
              <br /> Houston, TX 77005
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:gap-14 items-center lg:items-end">
          {/* Menú central mapeado */}
          <ul className="flex flex-col lg:flex-row gap-6 space-x-1 lg:space-x-12 text-xl !leading-none lg:text-2xl">
            {menuItems.map(({ href, label, id }) => (
              <li key={id}>
                <Link href={href} legacyBehavior>
                  <a
                    className={`dark:hover:text-pinkSecondary hover:text-pink duration-300 font-semibold tracking-tight ${
                      router.pathname === href ? "text-green" : ""
                    }`}
                  >
                    <span className="text-base italic font-light mr-2">
                      {id}{" "}
                    </span>
                    {label.split(" ")[0]}{" "}
                    <span className="font-extrabold italic font-ramillas text-110">
                      {label.split(" ").slice(1).join(" ")}
                    </span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          {/* Redes sociales y lenguaje */}
          <div className="flex flex-col items-center lg:items-end space-y-6">
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/magis.mkt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="fill-white dark:fill-main" />
              </a>
              <a
                href="https://www.facebook.com/magis.mkt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="fill-white dark:fill-main" />
              </a>
              <a
                href="https://www.tiktok.com/@magis.mkt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Tiktok className="fill-white dark:fill-main" />
              </a>
              <a
                href="https://www.youtube.com/@MAGISMARKETING"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="fill-white dark:fill-main" />
              </a>
              <a
                href="https://www.linkedin.com/company/magis-mktg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="fill-white dark:fill-main" />
              </a>
              <a
                href="https://mx.pinterest.com/magismarketing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pinterest className="fill-white dark:fill-main" />
              </a>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      {/* Derechos reservados */}
      <div className="flex flex-col md:flex-row gap-4 text-center items-center justify-center md:justify-between md:text-left text-sm dark:text-light text-main opacity-50 lg:container w-full mt-12 lg:mt-24">
        <span>© Magis Marketing 2024. All Rights Reserved.</span>
        <span className="flex gap-1">
          Designed & developed by <Dev />
        </span>
      </div>
    </footer>
  );
}

export default Footer;
