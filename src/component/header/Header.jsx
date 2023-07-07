import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.css';
import './header.css';
export default function Header(){
    const [showMenu,setShowMenu]=useState(false);
    const handleToggle=()=>{
        setShowMenu(!showMenu);
    }
    const handleHideMenu=()=>{
        setShowMenu(false);
    }
    return(
        <div className="fixed">
            <div className="container header">
            <div className="row bar">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 logo">
                    <img src="Assets/PPS_logo.png" alt="logo" />
                </div>
                <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 menuBar" id={`${showMenu ? 'show':''}`}>
                    <div className="menu">
                        <span onClick={handleHideMenu}>Accueil</span>
                        <span onClick={handleHideMenu}>Projets</span>
                        <span onClick={handleHideMenu}>Services</span>
                        <span onClick={handleHideMenu}>Contact</span>
                    </div>
                    <div className="appointment">
                        <span onClick={handleHideMenu}>
                            Prendre rendez-vous <i class="fa-solid fa-phone"></i>
                        </span>
                    </div>
                </div>
                <div className="btnMenu col-sm-9 col-9">
                    <i class="fa-solid fa-bars" onClick={handleToggle}></i>
                </div>
            </div>
        </div>
        </div>
    )
}