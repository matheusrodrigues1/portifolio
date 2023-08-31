import About from '@/components/About';
import Home1 from '../components/Home1';
import Projects from '../components/Projects';
import Contact from '@/components/Contact';


export default function Home() {
  return (
    <>
      <Home1 />
      <Projects />
      <About/>
      <Contact/>
    </>
  );
}
