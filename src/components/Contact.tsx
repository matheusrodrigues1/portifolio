'use client'

import React, { useState } from 'react';
import Newsletter from '../styles/public/icon1.svg';
import Styles from '../styles/contact.module.scss';
import Image from 'next/image';

const Contact = () => {
  const [copiado, setCopiado] = useState(false);
  const email = 'carlostech873@gmail.com';

  const copiarEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiado(true);

    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };

  return (
    <div className={Styles.contactMe}>
      <div className={Styles.container}>
        <Image src={Newsletter} alt='newsletter' />
        <h2>Me mande um email</h2>
      </div>
      <div className={`${Styles.action} ${copiado ? Styles.copiadoBackground : ''}`}>
        <h4>{email}</h4>
      </div>
      <button onClick={copiarEmail}>
        {copiado ? 'EMAIL COPIADO!' : 'COPIAR EMAIL'}
      </button>
    </div>
  );
};

export default Contact;
