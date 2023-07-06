import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import './header.css';
export default function Header(){
    return(
        <div className="container header">
            <div className="row bar">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-2 col-2 logo">
                    <img src="Assets/PPS_logo.png" alt="logo" />
                </div>
                <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-9 col-sm-10 col-10 menuBar">
                    <div className="menu">

                    </div>
                    <div className="appointment">
                        <span>
                            Prendre rendez-vous <i class="fa-solid fa-phone fa-beat-fade fa-sm"></i>
                        </span>
                    </div>
                </div>
                <div className="btnMenu">

                </div>
            </div>
        </div>
    )
}