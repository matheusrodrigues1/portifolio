import React from 'react';
import Newsletter from '../styles/public/icon1.svg';
import Styles from '../styles/contact.module.scss';

import {useState, useRef} from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className={Styles.contactMe}>
      <div className={Styles.container}>
        <div className={Styles.newsletter}>
          <Image src={Newsletter} className={Styles.newsletter1} alt='newsletter'/>
        </div>
        <h2>Me mande um email</h2>
        <div className={Styles.emailCopy}>
          <div className={Styles.emailSection}>
            <span>cmmr1@aluno.ifal.edu.br</span>
          </div>
          <div className={Styles.horizontalLine}></div>
          <div className={Styles.emailSection}>
            <button>Copiar email</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
