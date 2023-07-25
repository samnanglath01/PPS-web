import React, { forwardRef, useEffect, useState } from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.css'
import Service from '../other/service/Service';
import Software from '../other/software/Software';
import Counter from '../other/counter/Counter';
import MyService from '../other/myService/MyService';
import Aos from 'aos';
import {Link} from 'react-router-dom';
import 'aos/dist/aos.css';
import $ from 'jquery';

const Home = forwardRef(function (props) {
    const next=()=>{
        $('.section7').find('.contentDiv .pagination #btn-next').click();
    }
    useEffect(() => {
        Aos.init({ duration: 1500 });
        window.setInterval(next,5000);
    }, []);
    const [activeIndex, setActiveIndex] = useState(0);
     const handlePrevious=()=>{
        activeIndex === 0?
        setActiveIndex(staff.length-1) : setActiveIndex(activeIndex-1);
     }
     const handleNext=()=>{
        activeIndex === staff.length-1 ? 
        setActiveIndex(0) : setActiveIndex(activeIndex+1);
     }
    const staff=[
        { name: "Jonh", position: "Project Manager", image: "./Assets/emp1.png" },
        { name: "Mr Phumra", position: "Supervisor", image: "./Assets/emp2.png" },
        { name: "Mr Rachna", position: "Tester", image: "./Assets/emp3.png" },
        { name: "Adam Smith", position: "Software Engineer", image: "./Assets/emp1.png" },
        { name: "Morgan", position: "Manager", image: "./Assets/emp2.png" },
        { name: "Jodan", position: "Content Writer", image: "./Assets/emp3.png" }
    ];
    const scrollToTop=()=>{
        window.scrollTo(0,0);
    }
    
    return (
        <div className='home'>
            
            <div className="section1 container-fluid">
                <div className="contentDiv row">
                    <h1 id='title' className="title col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        Des logiciels <span>PUISSANTS</span> conçus pour vous.
                    </h1>
                    <p data-aos="fade-right"
                        className="description col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        Partenaire technologique de grands éditeurs depuis plus de 20 ans, Paris Partners Softwares met tout son savoir-faire à votre service afin de vous donner satisfaction.
                    </p>
                </div>
                <div className="row d-flex justify-content-center">
                    <Link to={"/project"} className="button ">
                        Explorez l'expertise <i className='fa-solid fa-arrow-down fa-beat-fade'></i>
                    </Link>
                </div>
            </div>
            <div className="section2 cintainer-fluid" >
                <div className="contentDiv row">
                    <h1 data-aos="fade-up" data-aos-duration="1200" className="title col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        Secteurs <span>d'activité</span>
                    </h1>
                    <div data-aos="fade-up" data-aos-duration="1200" className="description col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        Our job is to design the tools you need on a day-to-day basis. Every organization needs to optimize its management processes if it is to operate professionally, rigorously and efficiently.
                    </div>
                </div>
                <div className="serviceDiv row">
                    <div data-aos="flip-left" className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7 col-12">
                        <Service img="Assets/Bullseye.png" color="#035" bgColor="#fff" title="Projet logiciel de A à Z" des="With Third-Party Application Maintenance, we offer you a dedicated contact for the administration of your tool, for maximum responsiveness. We periodically perform the following for you" />
                    </div>
                    <div data-aos="flip-left" className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7 col-12">
                        <Service img="Assets/Laptop.png" color="#fff" bgColor="#0025FF" title="Maintenance et évolution" des="With Third-Party Application Maintenance, we offer you a dedicated contact for the administration of your tool, for maximum responsiveness. We periodically perform the following for you" />
                    </div>
                    <div data-aos="flip-left" className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7 col-12">
                        <Service img="Assets/Check Mark Button.png" color="#035" bgColor="#fff" title="Test de fiabilité et sécurité" des="With Third-Party Application Maintenance, we offer you a dedicated contact for the administration of your tool, for maximum responsiveness. We periodically perform the following for you" />
                    </div>
                </div>
            </div>
            <div className="section3 container-fluid" ref={props.aboutSection}>
                <div className="titleDiv row">
                    <h1 data-aos="fade-right" data-aos-duration="1000" className="title col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        ENSEMBLE NOUS <span>ÉVOLUONS</span>
                    </h1>
                </div>
                <div data-aos="fade-up" className="partnerDiv row">
                    <div className='col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-6 partner'>
                        <img src="./Assets/partner (1).png" alt="" />
                    </div>
                    <div className='col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-6 partner'>
                        <img src="./Assets/partner (2).png" alt="" />
                    </div>
                    <div className='col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-6 partner'>
                        <img src="./Assets/partner (3).png" alt="" />
                    </div>
                    <div className='col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-6 partner'>
                        <img src="./Assets/partner (4).png" alt="" />
                    </div>
                    <div className='col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-6 partner'>
                        <img src="./Assets/partner (5).png" alt="" />
                    </div>
                    <div className='col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-6 partner'>
                        <img src="./Assets/partner (6).png" alt="" />
                    </div>
                    <div className='col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-6 partner'>
                        <img src="./Assets/partner (7).png" alt="" />
                    </div>
                    <div className='col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-6 partner'>
                        <img src="./Assets/partner (8).png" alt="" />
                    </div>


                </div>
            </div>
            <div className="section9 container-fluid" >
                <div className="row contentDiv p-0">
                    <div data-aos="fade-up" className="d-flex  content col-xxl-7 col-xl-7 col-lg-7 col-md-12 ">
                        <h1 className="title">
                            Exprimez vos idées avec des outils puissants.
                        </h1>
                        <p className="description">
                            We support our customers in all phases of their projects and throughout the entire product lifecycle, both in France and internationally.
                        </p>
                        <div className="button my-button">
                            Créons votre logiciel
                        </div>
                    </div>
                    <div data-aos="fade-up" className="imgBox col-xxl-5 col-xl-5 col-lg-5 col-md-7 col-sm-8 ">
                        <img src="./Assets/image.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="section4 container-fluid d-flex" ref={props.projectSection}  id='Project'>
                <div className="row contentDiv d-flex">
                    <div data-aos="fade-right" className="titleDiv">
                        <h1 className="title">
                            Réalisations à <span>succès</span>
                        </h1>
                    </div>
                    <div className='desDiv'>
                        <p data-aos="zoom-out" className="description">
                            Partenaire technologique de grands éditeurs depuis plus de 20 ans, Paris Partners Softwares met tout son savoir-faire à votre service afin de vous donner satisfaction.
                        </p>

                        <Link className="button my-button">
                            Créons votre logiciel
                        </Link>
                    </div>
                </div>
                <div className="row softwareDiv">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-10 softwareBox p-4">
                        <Software img="./Assets/Software_Box1.png" name="#Example1" />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-10 softwareBox p-4">
                        <Software img="./Assets/Software_Box2.png" name="#Example2" />
                    </div>
                </div>
                <div className="row btnBox">
                    <div className="col d-flex justify-content-center">
                        <Link to={'/project'} onClick={()=>{scrollToTop();}} className='btnPlus'>
                            Plus de Project <i class="fa-solid fa-arrow-down fa-bounce"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="section5 container-fluid">
                <div className="row statistic d-flex row-gap-5 justify-content-center">
                    <div data-aos="fade-right" data-aos-duration="1000" className="col-xxl-4 col-xl-4 col-lg-4 co-md-4 col-sm-5 col-7">
                        <Counter number="32" text="Projets accomplis" color="red" />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" className="col-xxl-4 col-xl-4 col-lg-4 co-md-4 col-sm-5 col-7">
                        <Counter number="32" text="Développeurs performants" color="black" />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000" className="col-xxl-4 col-xl-4 col-lg-4 co-md-4 col-sm-5 col-7">
                        <Counter number="32" text="Années d’expérience" color="blue" />
                    </div>
                </div>
            </div>
            <div className="section6 container-fluid d-flex " ref={props.serviceSection} id='Service'>
                <div className="row contentDiv d-flex">
                    <div data-aos="fade-right"  className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 content">
                        <h1 className="title">
                            Notre <span>demarche</span>
                        </h1>
                        <p className="description">
                            Nous accompagnons l’activité de nos clients dans toutes les phases de leurs projets et sur l’ensemble du cycle de vie de leurs produits, en France comme à l’international.
                        </p>
                    </div>
                    <div className="text-center p-4 col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 btnDiv">
                        <div className="button my-button">
                            Créons votre logiciel
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="row serviceDiv d-flex">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 serviceBox">
                        <MyService bgIcon="" number="1" title="Meeting" description="An in-depth examination of the topic at hand is essential to ensure that all aspects of the subject are thoroughly explored and understood." icon="./Assets/Connectivity and Help (1).png" />
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 serviceBox">
                        <MyService bgIcon="" number="2" title="Analysis" description="An in-depth examination of the topic at hand is essential to ensure that all aspects of the subject are thoroughly explored and understood." icon="./Assets/Search (1).png" />
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 serviceBox">
                        <MyService bgIcon="" number="3" title="Specification" description="An in-depth examination of the topic at hand is essential to ensure that all aspects of the subject are thoroughly explored and understood." icon="./Assets/Book (1).png" />
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 serviceBox">
                        <MyService bgIcon="" number="4" title="Coding" description="An in-depth examination of the topic at hand is essential to ensure that all aspects of the subject are thoroughly explored and understood." icon="./Assets/Keyboard (1).png" />
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 serviceBox">
                        <MyService bgIcon="" number="5" title="Testing & QA" description="An in-depth examination of the topic at hand is essential to ensure that all aspects of the subject are thoroughly explored and understood." icon="./Assets/True False (1).png" />
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 serviceBox">
                        <MyService bgIcon="" number="6" title="Deployment" description="An in-depth examination of the topic at hand is essential to ensure that all aspects of the subject are thoroughly explored and understood." icon="./Assets/Checked Checkbox (1).png" />
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="section7 container-fluid d-flex">
                <div className="row titleDiv">
                    <h1 className="title text-center text-uppercase">
                        Notre <span>équipe</span>
                    </h1>
                </div>
                <div className="contentDiv row d-flex row-gap-3 align-item-center">
                    <div className="imgDiv col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
                        <img src={`${activeIndex === 0 ? staff[staff.length-1].image : staff[activeIndex-1].image}`} alt="" className='img'/>
                        <img src={staff[activeIndex].image} alt="" className='img active'/>
                        <img src={`${activeIndex === staff.length-1 ? staff[0].image : staff[activeIndex+1].image}`} alt="" className='img'/>
                    </div>
                    <div className="staff d-flex col-xxl-12-col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="name">
                            {staff[activeIndex].name}
                        </div>
                        <p className="position">
                            {staff[activeIndex].position}
                        </p>
                    </div>
                    <div className="pagination d-flex justify-content-between align-item-center col-xxl-5 col-xl-5 col-lg-8 col-md-8 col-sm-10 col-10 p-0">
                        <img src="./Assets/pre.svg" alt="" id='btn-pre' onClick={handlePrevious}/>
                        <div className='rule'>
                            {

                                staff.map((st, index) => {
                                    return (
                                        <div className={`r ${index === activeIndex ? 'active' : ''}`}></div>
                                    );
                                })
                            }

                        </div>
                        <img src="./Assets/next.svg" alt="" id='btn-next' onClick={handleNext}/>
                    </div>
                </div>
                <div className="btnDiv row text-center">
                    <Link to={"/team"} onClick={()=>{scrollToTop();}} className="button">
                        Découvrez notre équipe <i className='fa-solid fa-arrow-right ms-2'></i>
                    </Link>
                </div>
            </div>
            <div data-aos="fade-right" className="section8 container-fluid d-flex row-gap-4">
                <div className="row titleDiv">
                    <div className="col-12 title text-center">
                        Commencez l’aventure maintenant
                    </div>
                </div>
                <div className="desDiv row">
                    <div className="col-12 description text-center">
                        Nous accompagnons l’activité de nos clients dans toutes les phases de leurs projets et sur l’ensemble du cycle de vie de leurs produits
                    </div>
                </div>
                <div className="emailDiv d-flex w-100 row">
                    <div className="emailBox col-xxl-10 col-xl-10 col-lg-9 col-md-9 col-sm-12 col-12">
                        <i class="fa-solid fa-envelope"></i>
                        <input type="email" name="" id="" className='email' placeholder='Entrez votre email' />

                    </div>
                    <div className="text-center btnBox col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-12 col-12 d-flex justify-content-center row-gap-3">
                        <div className="button my-button">
                            Envoyer
                        </div>
                    </div>
                    <p style={{ fontSize: "12px", position: "absolute", left: 0, top: "118%" }} className="des w-100 mt-0">Inscription instantanée. Aucune carte de crédit n'est requise. <span style={{ color: "blue", cursor: "pointer" }}>Conditions d'utilisation</span> et <span style={{ color: "blue", cursor: "pointer" }}>politique de confidentialité</span>.</p>
                </div>

            </div>

        </div>
    );
})

export default Home;