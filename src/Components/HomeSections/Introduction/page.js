'use client'
import React from "react";
import style from "./page.module.css"
import Image from "next/image";

function Introduction() {
  return (
    <section className={style.main}>
      <div className={style.mainDiv}>
        <span className={style.topText}>TENEMOS LO QUE TANTO ESTÁS BUSCANDO</span>
        <div className={style.centerTextDiv}>
          <span className={style.previousCenterText}>SERVICIOS</span>
          <div className={style.centerTextWrapper}>
            <h1 className={style.centerText}>LIMPIEZA <br/> FINALES DE OBRA <br/> VIGILANCIA </h1>
          </div>
        </div>
        <span className={style.finalText}>ESTÁS A TÁN SOLO UN CLICK DE ENCONTRAR LA SOLUCIÓN QUE BUSCABAS</span>
      </div>
      <div className={style.imageWrapper}>
        <Image  
        src="/banner-limpieza.jpg"
        alt="Image Limpieza"
        fill
        priority
        sizes="(max-width:750px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </section>
  );
}

export default Introduction;
