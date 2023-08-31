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
          Eu sou Matheus, um desenvolvedor apaixonado pela criação na web. Com 23 anos e um ano de experiência como freelancer, estou embarcando em uma emocionante jornada no desenvolvimento web.
          Durante esse ano, mergulhei fundo no mundo do desenvolvimento, trabalhando como freelancer. Tenho habilidades sólidas em ReactJS para criar interfaces dinâmicas e atraentes. Além disso, estou aprofundando meu conhecimento com Next.js para levar meus projetos a novos patamares.
          Com um olho no frontend e outro no backend, tenho explorado o poder do Node.js para construir servidores e APIs que impulsionam a funcionalidade por trás das cortinas.
        </p>
        <p>Minha abordagem é encarar cada desafio como uma oportunidade de crescimento. Tenho orgulho da minha jornada até agora e estou animado para as possibilidades que o futuro reserva.
          Se você está em busca de um desenvolvedor experiente, pronto para enfrentar novos projetos com paixão, estou aqui para colaborar e construir algo incrível.</p>
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
