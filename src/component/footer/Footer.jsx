import './footer.css';
export default function Footer(){
    return(
        <div className="d-flex flex-column footer w-100 gap-3">
            <div className="row content w-100">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
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
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
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
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
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
            <div className="bottom d-flex justify-content-between">
                <img src="./Assets/logo.svg" alt="" className="logo" style={{width:"80px"}}/>
                <div className="social d-flex justify-content-center align-items-center gap-2">
                    <i style={{color: "white", borderRadius:"50%", border:"1px solid silver", width:"30px" ,height:"30px"}} class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>
                <p style={{font:"14px 'DM Sans' 400 ", color:"white"}}>© 2023 Paris Partners Softwares. All rights reserved</p>
            </div>
        </div>
    )
}