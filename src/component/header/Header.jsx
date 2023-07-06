import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import './header.css';
export default function Header(){
    return(
        <div className="container header">
            <div className="row bar">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 logo">
                    <img src="Assets/PPS_logo.png" alt="logo" />
                </div>
                <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 menuBar">
                    <div className="menu">
                        <span>Accueil</span>
                        <span>Projets</span>
                        <span>Services</span>
                        <span>Contact</span>
                    </div>
                    <div className="appointment">
                        <span>
                            Prendre rendez-vous <i class="fa-solid fa-phone fa-beat-fade fa-sm"></i>
                        </span>
                    </div>
                </div>
                <div className="btnMenu col-sm-9 col-9">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    )
}