import styles from './page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.react}>
          REACT
          <a href="https://github.com/usuario" className={styles.link}>
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          </a>
          <a href="https://github.com/usuario" className={styles.link}>
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </a>
          <a href="https://github.com/usuario" className={styles.link}>
            <FontAwesomeIcon icon={faFileLines} className={styles.icon} />
          </a>
        </span>
        <span className={styles.developer}>DEVELOPER</span>
      </h1>
    </div>
  );
}
