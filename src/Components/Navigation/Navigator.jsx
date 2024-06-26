"use client";
import Image from "next/image";
import "../../app/globals.css";
import { Poppins } from "next/font/google";
import { Pinyon_Script } from "next/font/google";
import style from "./Navigator.module.css";
import { useState } from "react";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Navigator() {
  const [active, setActive] = useState(false);

  return (
    <nav className={`navbar container-fluid ${style.navbar}`}>
      <div className={style.logo_div}>
        <Image
          src="/Logo-Block.png"
          alt="Logo"
          fill
          priority
          sizes="(max-width:750px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div onClick={() => setActive(!active)}>
        <div className={active ? style.activeHamburguer : style.hamburguer} />
      </div>
      <div className={active ? style.activeSidenav : style.sidenav}>
        <ul className={style.ul}>
          <Link href="/" className={active ? style.activeLink : style.link}><li>Home</li></Link>
          <Link href="/" className={active ? style.activeLink : style.link}><li>Servicios</li></Link>
          <Link href="/" className={active ? style.activeLink : style.link}><li>Nosotros</li></Link>
          <Link href="/" className={active ? style.activeLink : style.link}><li>Trabaja con Nosotros</li></Link>
          <Link href="/" className={active ? style.activeLink : style.link}><li>Contacto</li></Link>
        </ul>
      </div>
    </nav>
  );
}