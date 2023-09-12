'use client'
import styles from '../styles/page.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import Emoji from 'react-emoji-render';


export default function Home1() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.react}>
          <p className={styles.greeting}>OI <Emoji text="👋" /> EU SOU O MATHEUS</p>
          REACT
          <a href="https://www.linkedin.com/in/matheus-rodrigues-1a1899231/" className={styles.link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          </a>
          <a href="https://github.com/matheusrodrigues1" className={styles.link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </a>
          <a href="https://drive.google.com/file/d/1Jfn9RAqFR3YaQbL8j_lJA0z8HHlLI3Xq/view?usp=sharing" className={styles.link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFileLines} className={styles.icon} />
          </a>
        </span>
        <span className={styles.developer}>
          DEVELOPER
          <p className={styles.devInfo}>
            TENHO 23 ANOS SOU DESENVOLVEDOR FRONTEND COM 1 ANO DE EXPERIÊNCIA TRABALHANDO COMO FREELANCER.
          </p>
        </span>
      </h1>
    </div>
  );
}
