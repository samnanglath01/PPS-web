import { useRef } from 'react';
import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Home from './component/home/Home';

function App() {
  const aboutSection = useRef(null);
  const serviceSection = useRef(null);
  const projectSection=useRef(null);
  const welcomeSection=useRef(null);
  const contactSection=useRef(null);

  return (
    <>
      <Header aboutSection={aboutSection} serviceSection={serviceSection} projectSection={projectSection} welcomeSection={welcomeSection} contactSection={contactSection}/>
      <Home aboutSection={aboutSection} serviceSection={serviceSection} projectSection={projectSection} welcomeSection={welcomeSection}/>
      <Footer contactSection={contactSection}/>
    </>
  );
}

export default App;
