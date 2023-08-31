import Image from "next/image";
import Styles from "../styles/projects.module.scss";
import Projeto1 from "../styles/public/project1.png"

export default function Projects() {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.projetcs}>
          <Image className={Styles.image} src={Projeto1} alt="projeto 1"/>
          <span>ESTUDO DE CASO</span>
          <h2>Landingpage</h2>
        </div>
        <div className={Styles.projetcs}>
          <Image className={Styles.image} src={Projeto1} alt="projeto 1"/>
          <span>ESTUDO DE CASO</span>
          <h2>Landingpage</h2>
        </div>
      </div>
    </>
  )
}