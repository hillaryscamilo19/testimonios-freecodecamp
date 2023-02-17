import React from "react";
import '../Stylesheets/Testimony.css';

function  Testimony(props){
  return(
    <div className='testimonial-container'>
        <img className='testimonial-img'
         src={require(`../img/testimony-${props.img}.jpeg`)}
         alt='img-isy'/>
        <div className='testimonial-container-text'>
          <p className='testimony-name'>{props.name} en {props.country}</p>
          <p className='charge-testimony'>  {props.charge} en  {props.company}</p>
          <p className='text-testimony'>  "{props.text}"</p>
        </div>
    </div>
  );  
}

export default Testimony;