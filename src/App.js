import { useRef } from 'react';
import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Call from './component/other/call/Call';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contact from './component/contact/Contact';
import Project from './component/project/Project';
import Team from './component/team/Team';

function App() {
  const aboutSection = useRef(null);
  const serviceSection = useRef(null);
  const projectSection=useRef(null);
  const welcomeSection=useRef(null);
  const contactSection=useRef(null);

  return (
    <BrowserRouter>
      <Header aboutSection={aboutSection} serviceSection={serviceSection} projectSection={projectSection} welcomeSection={welcomeSection}/>
        <Routes> 
            <Route index element={<Home />}/>
            <Route path='activity' element/>
            <Route path='project' element={<Project/>}/>
            
            <Route path='step' element/> 
            <Route path='team' element={<Team/>}/> 
            <Route path='contact' element={<Contact/>}/>
        </Routes>
        <Call/>
      <Footer contactSection={contactSection}/>
    </BrowserRouter>
  );
}

export default App;
