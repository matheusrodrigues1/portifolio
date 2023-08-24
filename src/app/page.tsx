import styles from '../styles/page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import Emoji from 'react-emoji-render';
import Home1 from './components/Home1';
import Projects from './components/Projects';


export default function Home() {
  return (
    <>
      <Home1 />
      <Projects />
    </>
  );
}
