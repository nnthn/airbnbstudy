import React from "react";
import img1 from "../images/person1.png";
import star from "../images/star.png";

export default function Card(){
    return(
        
        <div className="card" >
          <img src={img1} className="person1"/>
          <div className="rating">
            <img src={star} className="star"/>
            <span className="grey">5.0</span>
            <span className="grey">(6) &bull; USA</span>
          </div>
          <p className="intro">Life lessons with Kate Zaferes</p>
          <p>
            <span className="bold">From $136</span>/ person

          </p>

        </div>

    );

}
