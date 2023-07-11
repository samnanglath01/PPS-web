import './footer.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Footer(){
    useEffect(()=>{
        Aos.init({duration:1500});
    },[])
    return(
        <div data-aos="fade-up" className="d-flex flex-column footer w-100 gap-3">
            <div className="row content w-100">
                <div data-aos="fade-right" data-aos-delay="100" className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                    <h2 className="title">
                        Liens utiles
                    </h2>
                    <div className="menu">
                        <p>Accueil</p>
                        <p>Actualités</p>
                        <p>Projets</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                    <h2 className="title">
                        Mentions légales
                    </h2>
                    <div className="menu">
                        <p>Mentions légales</p>
                        <p>Règle de conformité</p>
                        <p>RGPD</p>
                        <p>Cookies</p>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="100" className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                    <h2 className="title">
                        Informations
                    </h2>
                    <p className="phone">
                        <i class="fa-solid fa-phone"></i>
                        +893 372 728 292
                    </p>
                    <p className="email">
                        <i class="fa-solid fa-envelope"></i>
                        contact@parispartners.com
                    </p>

                </div>
            </div>
            <div style={{height:"2px" ,backgroundColor:"white"}} className='w-100' ></div>
            <div className="row bottom d-flex justify-content-between">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                    <img src="./Assets/logo.svg" alt="" className="logo" style={{width:"80px"}}/>
                </div>
                <div className='social d-flex col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6'>
                    <a href="https://www.linkedin.com/company/paris-partners-softwares/about/"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://web.facebook.com/paris.partners.softwares/?_rdc=1&_rdr"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#2"><i class="fa-brands fa-twitter"></i></a>
                </div>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center'>
                <p style={{font:"14px 'DM Sans' 400 ", color:"white"}}>© 2023 Paris Partners Softwares. All rights reserved</p>
                </div>
                
            </div>
        </div>
    )
}