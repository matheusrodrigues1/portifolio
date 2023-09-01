'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'
import React from 'react'
import Styles from '../styles/about.module.scss';
import image from '../styles/public/helo.png'

const About = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.cardleft}>
        <p className={Styles.firstParagraph}>
        Olá! Sou um desenvolvedor frontend em ascensão, empolgado em enfrentar desafios e aprender cada dia mais. Minha jornada envolve explorar ferramentas como ReactJS, Bootstrap, Next.js, HTML e CSS, à medida que transformo designs em interfaces práticas. Busco constantemente melhorar minhas habilidades para criar experiências digitais que unam funcionalidade e estética. Estou entusiasmado com a oportunidade de colaborar em projetos inspiradores que me permitam crescer como desenvolvedor frontend, enquanto contribuo com soluções criativas para criar impacto na web.
        </p>
        <p>
        Seja na criação de sites modernos ou na construção de aplicativos interativos, minha abordagem centrada no usuário e minha dedicação ao aprimoramento contínuo me mantêm inspirado e comprometido com a criação de soluções excepcionais. Estou ansioso para cada oportunidade que me permita colaborar em projetos inovadores e agregar valor através do poder da tecnologia frontend.
        </p>
        <div className={Styles.icons}>
          <a href="https://github.com/usuario" className={Styles.link}>
              <FontAwesomeIcon icon={faLinkedin} className={Styles.icon} />
          </a>
          <a href="https://github.com/usuario" className={Styles.link}>
              <FontAwesomeIcon icon={faGithub} className={Styles.icon} />
          </a>
          <a href="https://github.com/usuario" className={Styles.link}>
              <FontAwesomeIcon icon={faFileLines} className={Styles.icon} />
          </a>
        </div>
      </div>
      <div className={Styles.cardRight}>
        <Image src={image} className={Styles.image} alt='helo'/>
      </div>
      
    </div>
  )
}

export default About
