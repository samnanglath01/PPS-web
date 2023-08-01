import React, { useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './header.css';
import {Link} from 'react-router-dom';

const Header =()=>{
    const [active, setActive]=useState(1);

    const scrollToTop=()=>{
        window.scrollTo(0,0);
    }
    const [show,setShow]=useState(false);
    return (
        <div className="container-fluid header">
            <div className="row bar">
                <div className="col-3 btnDiv">
                    <div className="btn-toggle" onClick={()=>{setShow(!show)}}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
                <div className="col-3 text-center logoDiv">
                    <img onClick={()=>{}} src="./Assets/PPS_logo.png" alt="" className="logo"  />
                </div>
                <div className="col-9 menuDiv " id={show? "show" :""}>
                    <div className="menu">
                        <Link to={'/'} onClick={()=>{scrollToTop();setShow(!show); setActive(1)}} className={`link ${active === 1 ? 'active': ''}`}>Accueil</Link>
                        <Link to={'/activity'} onClick={()=>{scrollToTop();setShow(!show); setActive(2)}} className={`link ${active === 2 ? 'active': ''}`}>Activités</Link>
                        <Link to={'/project'} onClick={()=>{scrollToTop();setShow(!show); setActive(3)}} className={`link ${active === 3 ? 'active': ''}`}>Projets</Link>
                        <Link to={'/step'} onClick={()=>{scrollToTop();setShow(!show); setActive(4)}} className={`link ${active === 4 ? 'active': ''}`}>Démarche</Link>
                        <Link to={'/team'} onClick={()=>{scrollToTop();setShow(!show); setActive(5)}} className={`link ${active === 5 ? 'active': ''}`}>Équipe</Link>
                    </div>
                    <Link to={'contact'} onClick={()=>{scrollToTop();setShow(!show);setActive(100)}} className="btn-contact my-button">
                        Contact
                    </Link>
                </div>
                <div className="col-3 phoneDiv">
                    <Link onClick={()=>{scrollToTop(); setActive(100)}} to={'/contact'} className="btn-phone my-button">
                        <i className="fa-solid fa-phone"></i>
                    </Link>
                </div>

                
                
            </div>
        </div>
    )
};

export default Header;