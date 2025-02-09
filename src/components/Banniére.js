import React from "react";
import "../Styles/StylesBanner.css"; // Import the CSS file
import BannerImg from "../Images/Banner of Pharmacy/Banner Pharmacy.jpg"

const Banner = () => {
  return (
    <section className="banner">
      <img
        src={BannerImg} // Replace with the correct path
        alt="Pharmacie Sarra Chehata"
        className="banner-image"
      />
      <div className="overlay">
        <h1 className="title">Bienvenue à la Pharmacie Sarra Chehata</h1>
        <p className="subtitle">Votre santé, notre priorité</p>
        <a href="/Contactez" className="cta-button">Contactez-nous</a>
      </div>
    </section>
  );
};

export default Banner;