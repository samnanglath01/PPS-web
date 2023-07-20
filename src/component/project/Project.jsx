import { useState,useEffect } from 'react';
import MyButton from './button/MyButton';
import './project.css';
import 'bootstrap/dist/css/bootstrap.css';
import Feature from './feature/Feature';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Project(){
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const [active,setActive]=useState(0);
    return(
        <div className="project ">
            <div className="section1 container-fluid  d-flex flex-direction-column row-gap-3">
                <div className="titleDiv row d-flex justify-content-center">
                    <h1 className="title col-12 text-center">
                        Projet
                    </h1>  
                </div>
                <div className="nameDiv row text-center d-flex justify-content-center">
                    <p className="name col-12  text-center">
                        Example #1
                    </p>
                </div>
                <div className="btnDiv row d-flex row-gap-3 column-gap-4 justify-content-center">
                    <MyButton name={"Description"} icon={"fa-solid fa-file-lines"} active={active} setActive={setActive} index={0}/>
                    <MyButton name={"Mission"} icon={"fa-solid fa-bullseye"} active={active} setActive={setActive} index={1}/>
                    <MyButton name={"Caractéristiques"} icon={"fa-solid fa-feather"} active={active} setActive={setActive} index={2}/>
                    <MyButton name={"Processus"} icon={"fa-solid fa-layer-group"} active={active} setActive={setActive} index={3}/>
                    <MyButton name={"Solutions"} icon={"fa-solid fa-square-check"} active={active} setActive={setActive} index={4}/>
                </div>
            </div>
            <div className="section2 container-fluid d-flex row-gap-3">
                <div className="row contentDiv d-flex row-gap-3">
                    <h1 className="title col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12 ">
                        DESCRIPTION
                    </h1>
                    <p  className="description col-xxl-7 col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                        Description courte du projet en quelques lignes ... Description courte du projet en quelques lignes ... Description courte du projet en quelques lignes
                    </p>
                </div>
                <div className="row sw">
                    <img src="./Assets/sw.png" alt="" className='w-100'/>
                </div>
            </div>
            <div data-aos="fade-up" className="section3 container-fluid d-flex row-gap-4">
                <div className="contentDiv row d-flex row-gap-3">
                    <h1 className="title text-center">
                        NOTRE MISSION
                    </h1>
                    <p  className="description text-center">
                        Notre tâche consistait à concevoir une nouvelle version du logiciel. Nous avons revu sa structure et créé un nouveau style visuel et de nouveaux éléments pour son identité.
                    </p>
                </div>
                <div className="row ">
                    <img src="./Assets/pc.png" alt="" />
                </div>
            </div>
            <div data-aos="fade-up" className="section4 container-fluid d-flex row-gap-5">
                <div className="titleDiv row">
                    <h1 className="title text-uppercase col-12 text-center">
                        Caractéristiques
                    </h1>
                </div>
                <div className="row featureDiv d-flex ">
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-8 col-12 featureBox p-3">
                        <Feature />
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-8 col-12 featureBox p-3">
                        <Feature/>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-8 col-12featureBox p-3">
                        <Feature/>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-8 col-12 featureBox p-3">
                        <Feature/>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-8 col-12 featureBox p-3">
                        <Feature/>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-8 col-12 featureBox p-3">
                        <Feature/>
                    </div>

                </div>
                
            </div>
            <div className="section5 container-fluid d-flex">
                <div data-aos="fade-up" className="row row1  d-flex">
                    <div className="col-xxl-5  col-xl-5 col-lg-5 col-md-5 col-sm-8 col-12 imgDiv">
                        <img src="./Assets/img-section5-project.png" alt="" />
                    </div>
                    <div className="contentDiv d-flex flex-direction-column col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-8 col-12">
                        <h5 className="title">
                            ANALYS <img src="./Assets/logo-red.svg" alt="" />
                        </h5>
                        <ul className='list'>
                            <li>Suivre les spectateurs de démonstrations et engager</li>
                            <li>Analyser le comportement des spectateurs pour comprendre</li>
                            <li>Capturez des prospects grâce à vos formulaires</li>
                        </ul>
                    </div>
                </div>
                <div data-aos="fade-up" className="row row2  d-flex">
                    <div className="col-xxl-5  col-xl-5 col-lg-5 col-md-5 col-sm-8 col-12 imgDiv">
                        <img src="./Assets/img19.png" alt="" />
                    </div>
                    <div className="contentDiv d-flex flex-direction-column col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-8 col-12">
                        <h5 className="title">
                            Accompagnement <img src="./Assets/logo-black.svg" alt="" />
                        </h5>
                        <ul className='list'>
                            <li>Proposition de solutions Réunions</li>
                            <li>hebdomadaires pour suivre l’avancement du logiciel</li>
                            <li>Personalisation en fonction de l’avis client</li>
                        </ul>
                    </div>
                </div>
                <div data-aos="fade-up" className="row row3 d-flex">
                    <div className="col-xxl-5  col-xl-5 col-lg-5 col-md-5 col-sm-8 col-12 imgDiv">
                        <img src="./Assets/img-section5-project.png" alt="" />
                    </div>
                    <div className="contentDiv d-flex flex-direction-column col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-8 col-12">
                        <h5 className="title">
                            Livraison <img src="./Assets/logo-blue.svg" alt="" />
                        </h5>
                        <ul className='list'>
                            <li>Suivre les spectateurs de démonstrations et engager</li>
                            <li>Analyser le comportement des spectateurs pour comprendre</li>
                            <li>Capturez des prospects grâce à vos formulaires</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section6 container-fluid d-flex row-gap-5">
                <div className="row contentDiv d-flex row-gap-4">
                    <div className='logo col-12 text-center'>
                        <img src="./Assets/logo3color.svg" alt="" />
                    </div>
                    <h1 className="title col-12 text-center text-uppercase">
                        SOLUTIONS
                    </h1>
                    <p className="description col-12 w-75 text-center">
                        Notre tâche consistait à concevoir une nouvelle version du logiciel. Nous avons revu sa structure et créé un nouveau style visuel et de nouveaux éléments pour son identité.
                    </p>

                </div>
                <div className="row">
                    <img src="./Assets/mu1.png" alt="" className='w-100' />
                </div>
                <div className="row subImg d-flex">
                    <div className="imgDiv col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12">
                        <img src="./Assets/mu2.png" alt=""/>
                    </div>
                    <div className="imgDiv col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12">
                        <img src="./Assets/mu3.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="section9 container-fluid" >
                <div className="row contentDiv p-0">
                    <div data-aos="fade-right" className="d-flex  content col-xxl-7 col-xl-7 col-lg-7 col-md-12 ">
                        <h1 className="title">
                            Exprimez vos idées avec des outils puissants.
                        </h1>
                        <p className="description">
                            We support our customers in all phases of their projects and throughout the entire product lifecycle, both in France and internationally.
                        </p>
                        <div className="btn">
                            Créons votre logiciel
                        </div>
                    </div>
                    <div data-aos="fade-left" className="imgBox col-xxl-5 col-xl-5 col-lg-5 col-md-7 col-sm-8 ">
                        <img src="./Assets/image.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}