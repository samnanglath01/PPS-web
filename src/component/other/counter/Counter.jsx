import React from 'react';
import './counter.css';
export default function Counter(props){
    return(
        <div className="counter">
            <h1 className="number">
                {props.number}
                <i class="fa-solid fa-plus" style={{color:`${props.color}`}}></i>
            </h1>
            <div className="text">
                {props.text}
            </div>
        </div>
    )
}