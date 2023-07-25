import React from "react";
import './call.css';
import {Link} from 'react-router-dom';
const Call=()=>{
    const scrollToTop=()=>{
        window.scrollTo(0,0);
    }
    return(
        <Link to={'/contact'} onClick={()=>{scrollToTop();}} className="appointment">
            <div className="text">Prendre rendez-vous</div>
            <i className="fa-solid fa-phone"></i>
        </Link>
    )
}

export default Call;