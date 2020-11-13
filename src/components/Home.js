import React from "react";
import '../styles.less'

import { useHistory } from "react-router-dom";

export default function Home() {

  const history = useHistory();

  const routeToShop = () => {

    console.log(history, "HISTORY");
    history.push("/pizza");
  };

  return (
    <div className="home-wrapper">
     <center>
          <img
        className="home-image"
        src="https://i.pinimg.com/originals/bc/7d/a7/bc7da7adc3266d5fd1bf43f7679135f4.jpg"
        alt="pizza planet logo"
      />
      <br />
     <button onClick={routeToShop} className="md-button shop-button">
        Shop now!
      </button> </center>
    </div>
  );
}
