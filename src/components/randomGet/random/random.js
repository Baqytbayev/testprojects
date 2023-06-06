import React from "react";
import './random.css'


const Random =(props) => {
    return (
        <div className={'info'}>
            <img className={'image'} src={props.image} placeholder={props.image}/>
            <h2 className={'text'}>{props.text}</h2>
        </div>
    )
}

export default Random