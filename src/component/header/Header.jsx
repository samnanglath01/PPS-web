import React, { forwardRef, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './header.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';

const Header = forwardRef(function (props) {
    // const scrollDown = (ref) => {

    //     if(ref.current) window.scrollTo({
    //         top: ref.current.offsetTop - 50,
    //         behavior: 'smooth',
            
    //     });
    // };
    const scrollToTop=()=>{
        window.scrollTo(0,0);
    }

    const [showMenu, setShowMenu] = useState(false);
    useEffect(() => {
        Aos.init({ duration: 2000 });

    }, [])
    const handleToggle = () => {
        setShowMenu(!showMenu);
    }
    const handleHideMenu = () => {
        setShowMenu(false);
    }
    return (
        <div className="fixed">
            <div  data-aos-duration="1000" className="container header">
                <div className="row bar">
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 logo">
                        <img src="Assets/PPS_logo.png" alt="logo" />
                    </div>
                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 menuBar" id={`${showMenu ? 'show' : ''}`}>
                        <div className="menu">
                            <Link className="link" onClick={()=>{scrollToTop();handleHideMenu()}} to="/">Accueil</Link>
                            <Link className="link" onClick={()=>{scrollToTop();handleHideMenu()}} to="/project">Projets</Link>
                            <Link className="link" onClick={()=>{scrollToTop();handleHideMenu()}} to="/service">Services</Link>
                            <Link className="link" onClick={()=>{scrollToTop();handleHideMenu()}} to={"/team"}>Équipe</Link>
                            <Link className="link"  onClick={()=>{scrollToTop();handleHideMenu()}} to="/contact">Contact</Link>
                            
                        </div>
                        {/* <div className="appointment">
                            <span onClick={handleHideMenu}>
                                Prendre rendez-vous <i class="fa-solid fa-phone"></i>
                            </span>
                        </div> */}
                    </div>
                    <div className="btnMenu col-sm-9 col-9">
                        <i class="fa-solid fa-bars" onClick={handleToggle}></i>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Header;