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
        Meu nome é Matheus e atualmente resido em Alagoas. Ao longo dos últimos 18 meses, tenho trabalhado como freelancer, principalmente como desenvolvedor frontend. Além disso, tenho experiência em integrações com bancos de dados, APIs e até mesmo em tarefas de implantação
        </p>
        <p>
        Sou apaixonado por construir websites e aplicativos robustos e minimalistas. Com 1 ano e meio de experiência em diversas tecnologias frontend, incluindo <span>React, HTML, Sass, JavaScript (ES6), Tailwind, MongoDB, NodeJS e Bootstrap</span>, sempre busco qualidade em tudo o que faço. Você pode me encontrar no <span>GitHub</span>, onde gosto de desenvolver projetos pessoais com React/Next/Node.js, ou no LinkedIn, onde frequentemente compartilho meus projetos. Atualmente, estou expandindo minhas habilidades estudando <span>Next.js e TypeScript</span>.
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
