import React from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.css'
import Service from '../service/Service';
export default function Home(){
    return(
        <>
            <div className="section1 container-fluid">
                <div className="contentDiv row">
                    <h1 className="title col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        Des logiciels <span>PUISSANTS</span> conçus pour vous.
                    </h1>
                    <p className="description col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
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
                    <h1 className="title col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        Secteurs d'activité
                    </h1>
                    <div className="description col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        Our job is to design the tools you need on a day-to-day basis. Every organization needs to optimize its management processes if it is to operate professionally, rigorously and efficiently.
                    </div>
                </div>
                <div className="serviceDiv row">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7 col-8">
                        <Service img="Assets/Bullseye.png" color="#035" bgColor="#fff" title="Projet logiciel de A à Z" des="With Third-Party Application Maintenance, we offer you a dedicated contact for the administration of your tool, for maximum responsiveness. We periodically perform the following for you"/>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7 col-8">
                        <Service img="Assets/Laptop.png" color="#fff" bgColor="#0025FF" title="Maintenance et évolution" des="With Third-Party Application Maintenance, we offer you a dedicated contact for the administration of your tool, for maximum responsiveness. We periodically perform the following for you"/>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7 col-8">
                        <Service img="Assets/Check Mark Button.png" color="#035" bgColor="#fff" title="Test de fiabilité et sécurité" des="With Third-Party Application Maintenance, we offer you a dedicated contact for the administration of your tool, for maximum responsiveness. We periodically perform the following for you"/>
                    </div>
                </div>
            </div>
        </>
    );
}