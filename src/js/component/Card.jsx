import React from "react";
import { cardArray } from "./Constants";

export const Card = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "1rem", width:"100%", marginTop:"3vh" }}>
      {cardArray.map((item, index) => (
        <div className="card" style={{ width: "25%", height: "24rem" }} key={index}>
          <img class="card-img-top objetc-fit-cover h-100" src="https://www.coimbatoretrading.com/assets/images/supremecrates/500x325/SCL503210.jpg" alt="Card image cap"></img>
          <div className="card-body d-flex flex-column justify-content-center" style={{justifyContent:"center" }}>
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <buttom href="#" className="btn btn-primary w-40" style={{ width: "50%"}}>{item.boton}</buttom>
          </div>
        </div>
      ))}
    </div>
  )

};
