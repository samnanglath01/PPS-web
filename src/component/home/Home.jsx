import React, { useEffect } from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.css'
import Service from '../service/Service';
import Software from '../software/Software';
import Counter from '../counter/Counter';
import MyService from '../myService/MyService';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Home(){
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return(
        <div className='body'>
            <div className="section1 container-fluid">
                <div  className="contentDiv row">
                    <h1 className="title col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        Des logiciels <span>PUISSANTS</span> conçus pour vous.
                    </h1>
                    <p data-aos="fade-right"    
                        className="description col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        Partenaire technologique de grands éditeurs depuis plus de 20 ans, Paris Partners Softwares met tout son savoir-faire à votre service afin de vous donner satisfaction.
                    </p>
                </div>
                <div className="row btnDiv">
                    <div className="btnBox col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="btn1">
                            Créons votre logiciel
                        </div>
                    </div>
                    <div className="btnBox col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="btn2">
                            Explorez l'expertise <i class="fa-solid fa-arrow-down fa-bounce"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section2 cintainer-fluid">
                <div className="contentDiv row">
                    <h1 data-aos="fade-up" data-aos-duration="1200" className="title col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        Secteurs d'activité
                    </h1>
                    <div data-aos="fade-up" data-aos-duration="1200" className="description col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        Our job is to design the tools you need on a day-to-day basis. Every organization needs to optimize its management processes if it is to operate professionally, rigorously and efficiently.
                    </div>
                </div>
                <div className="serviceDiv row">
                    <div data-aos="flip-left" className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7 col-8">
                        <Service  img="Assets/Bullseye.png" color="#035" bgColor="#fff" title="Projet logiciel de A à Z" des="With Third-Party Application Maintenance, we offer you a dedicated contact for the administration of your tool, for maximum responsiveness. We periodically perform the following for you"/>
                    </div>
                    <div data-aos="flip-left" className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7 col-8">
                        <Service img="Assets/Laptop.png" color="#fff" bgColor="#0025FF" title="Maintenance et évolution" des="With Third-Party Application Maintenance, we offer you a dedicated contact for the administration of your tool, for maximum responsiveness. We periodically perform the following for you"/>
                    </div>
                    <div data-aos="flip-left" className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7 col-8">
                        <Service img="Assets/Check Mark Button.png" color="#035" bgColor="#fff" title="Test de fiabilité et sécurité" des="With Third-Party Application Maintenance, we offer you a dedicated contact for the administration of your tool, for maximum responsiveness. We periodically perform the following for you"/>
                    </div>
                </div>
            </div>
            <div className="section3 container-fluid">
                <div className="titleDiv row">
                    <h1 data-aos="fade-right" data-aos-duration="1000" className="title col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        ENSEMBLE NOUS ÉVOLUONS
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
            <div className="section9 container-fluid">
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
            <div className="section4 container-fluid d-flex">
                <div className="row contentDiv d-flex">
                    <div data-aos="fade-right" className="titleDiv">
                        <h1 className="title">
                            Réalisations à succès
                        </h1>
                    </div>
                    <div className='desDiv'>
                        <p data-aos="fade-left" className="description">
                            Partenaire technologique de grands éditeurs depuis plus de 20 ans, Paris Partners Softwares met tout son savoir-faire à votre service afin de vous donner satisfaction.
                        </p>

                        <div className="btn">
                            Créons votre logiciel
                        </div>
                    </div>
                </div>
                <div className="row softwareDiv">
                    <div data-aos="zoom-in-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-10 softwareBox p-4">
                        <Software img="./Assets/Software_Box1.png" name="#Example1" />
                    </div>
                    <div data-aos="zoom-in-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-10 softwareBox p-4">
                        <Software img="./Assets/Software_Box2.png" name="#Example2"/>
                    </div>
                </div>
                <div className="row btnBox">
                    <div className="col d-flex justify-content-center">
                        <div className='btnPlus'>
                            Plus de Project <i class="fa-solid fa-arrow-down fa-bounce"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section5 container-fluid">
                <div className="row statistic d-flex row-gap-5 justify-content-center">
                    <div data-aos="fade-right" data-aos-duration="1000" className="col-xxl-4 col-xl-4 col-lg-4 co-md-4 col-sm-5 col-7">
                        <Counter number="32" text="Projets accomplis" color="red"/>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" className="col-xxl-4 col-xl-4 col-lg-4 co-md-4 col-sm-5 col-7">
                        <Counter number="32" text="Développeurs performants" color="black"/>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000" className="col-xxl-4 col-xl-4 col-lg-4 co-md-4 col-sm-5 col-7">
                        <Counter number="32" text="Années d’expérience" color="blue"/>
                    </div>
                </div>
            </div>
            <div className="section6 container-fluid d-flex ">
                <div  className="row contentDiv d-flex">
                    <div data-aos="fade-right" className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 content">
                        <h1 className="title">
                            Notre demarche
                        </h1>
                        <p className="description">
                            Nous accompagnons l’activité de nos clients dans toutes les phases de leurs projets et sur l’ensemble du cycle de vie de leurs produits, en France comme à l’international.
                        </p>
                    </div>
                    <div data-aos="fade-left" className="text-center p-4 col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 btnDiv">
                        <div className="btn">
                            Créons votre logiciel
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="row serviceDiv bg-light d-flex">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 serviceBox">
                        <MyService number="1" title="Meeting" description="An in-depth examination of the topic at hand is essential to ensure that all aspects of the subject are thoroughly explored and understood." icon="./Assets/Connectivity and Help (1).png"/>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 serviceBox">
                        <MyService number="2" title="Analysis" description="An in-depth examination of the topic at hand is essential to ensure that all aspects of the subject are thoroughly explored and understood." icon="./Assets/Search (1).png"/>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 serviceBox">
                        <MyService number="3" title="Specification" description="An in-depth examination of the topic at hand is essential to ensure that all aspects of the subject are thoroughly explored and understood." icon="./Assets/Book (1).png"/>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 serviceBox">
                        <MyService number="4" title="Coding" description="An in-depth examination of the topic at hand is essential to ensure that all aspects of the subject are thoroughly explored and understood." icon="./Assets/Keyboard (1).png"/>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 serviceBox">
                        <MyService number="5" title="Testing & QA" description="An in-depth examination of the topic at hand is essential to ensure that all aspects of the subject are thoroughly explored and understood." icon="./Assets/True False (1).png"/>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 serviceBox">
                        <MyService number="6" title="Deployment" description="An in-depth examination of the topic at hand is essential to ensure that all aspects of the subject are thoroughly explored and understood." icon="./Assets/Checked Checkbox (1).png"/>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="section7 container-fluid d-flex">
                <div className="row titleDiv">
                    <h1 className="title text-center text-uppercase">
                        Notre équipe
                    </h1>
                </div>
                <div className="contentDiv row d-flex row-gap-3 align-item-center">
                    <div className="imgDiv col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
                     
                        <img src="./Assets/staff1.png" alt="" className="img" />
                        <img src="./Assets/staff1.png" alt="" className="img active" />
                        <img src="./Assets/staff1.png" alt="" className="img" />
                        <img src="./Assets/staff1.png" alt="" className="img hidden" />
                
                    </div>
                    <div className="staff d-flex col-xxl-12-col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="name">
                            Jonh
                        </div>
                        <p className="position">
                            chef de project
                        </p>
                    </div>
                    <div className="pagination d-flex justify-content-between align-item-center col-xxl-5 col-xl-5 col-lg-8 col-md-8 col-sm-10 col-10 p-0">
                        <img src="./Assets/pre.svg" alt="" />
                        <div className='rule'>
                            <div className="r"></div>
                            <div className="r active"></div>
                            <div className="r"></div>
                           
                        </div>
                        <img src="./Assets/next.svg" alt="" />
                    </div>
                </div>
                <div className="btnDiv row text-center">
                    <div className="button">
                        Découvrez notre équipe <i className='fa-solid fa-arrow-right ms-2'></i>
                    </div>
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
                        <div className="button">
                            Envoyer
                        </div>
                    </div>
                    <p style={{fontSize:"12px",position:"absolute", left: 0 , top:"110%"}} className="des w-100 mt-0">Inscription instantanée. Aucune carte de crédit n'est requise. <span style={{color:"blue",cursor:"pointer"}}>Conditions d'utilisation</span> et <span style={{color:"blue",cursor:"pointer"}}>politique de confidentialité</span>.</p>
                </div>
                
            </div>
            
        </div>
    );
}