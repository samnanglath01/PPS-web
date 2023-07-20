import React from "react";
import './service.css';
export default function Service(props){
    return(
        <div className="service" style={{backgroundColor:`${props.bgColor}`}}>
            <img src={props.img} alt="" />
            <h1 className="title" style={{color:`${props.color}`}}>
                {props.title}
            </h1>
            <p className="description" style={{color:`${props.color}`}}>
                {props.des}
            </p>
        </div>
    )
}