'use client'

import Image from "next/image";
import Styles from "../styles/projects.module.scss";
import Projeto1 from "../styles/public/project1.svg";
import Projeto2 from "../styles/public/project2.png";

export default function Projects() {
  const openNewWindow = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.projetcs}>
          <Image className={Styles.image} src={Projeto1} alt="projeto 1"/>
          <span>ESTUDO DE CASO</span>
          <h2>Vitrine de Carros</h2>
          <button
          className={Styles.button}
          onClick={() => openNewWindow("https://carhub-ecru-tau.vercel.app/")}
          >
            Ver Projeto
          </button>
        </div>
        <div className={Styles.projetcs}>
          <Image className={Styles.image} src={Projeto2} alt="projeto 1"/>
          <span>ESTUDO DE CASO</span>
          <h2>Landingpage</h2>
          <button
          className={Styles.button}
          onClick={() => openNewWindow("https://landingpage-r7vpc4y2k-matheusrodrigues1.vercel.app/")}
          >
            Ver Projeto
          </button>
        </div>
      </div>
    </>
  )
}