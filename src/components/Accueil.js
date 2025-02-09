import React from 'react';
import Contactform from "../components/Contactform"
import '../Styles/StylesApp.css';
import '../Styles/StylesAccueil.css';
import Banner from './Banniére';
import PharmacieSarraChehata from "../Images/Pharmacie Sarra Chehata.jpeg";
import ProduitsPharmaceutiquesIMGn1 from "../Images/Produits Pharmaceutiques Img n°1.jpg";
import Soinsetbienêtre from "../Images/Soins et bien être.jpg";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bienvenue dans notre pharmacie</title>
      </Helmet>
      <header>

        {/** Banner **/}
        <Banner />
      </header>

      <main>
        {/* Home Section */}
        <section id="home" className="home-section" >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12" >
                <h2 className="home-title">Bienvenue à la Pharmacie Sarra Chehata</h2>
                <p className="home-subtitle">Votre santé, notre priorité.</p>
                <p className="home-description">
                  Chez la Pharmacie Sarra Chehata, votre santé est notre priorité. Nous nous engageons à vous offrir des soins de qualité, adaptés à vos besoins, dans un environnement accueillant et professionnel.
                </p>
                <p className="home-description">
                  Découvrez une large gamme de produits pharmaceutiques, cosmétiques, et de bien-être, soigneusement sélectionnés pour améliorer votre qualité de vie. Notre équipe expérimentée est là pour vous conseiller et vous aider à prendre les meilleures décisions pour votre santé.
                </p>
                <p className="home-description">
                  Nos services incluent la délivrance d'ordonnances, des conseils personnalisés en matière de santé, des produits de soins spécialisés, et bien plus encore. Nous sommes là pour vous accompagner chaque jour, avec un service rapide et de confiance.
                </p>
                <p className="home-call-to-action">
                  Explorez nos produits en ligne et profitez de conseils adaptés à vos besoins spécifiques.
                </p>
              </div>
              <div className="col-lg-6 col-md-12 text-center">
                <img src={PharmacieSarraChehata} alt="Pharmacie Sarra Chehata" className="home-image img-fluid" />
              </div>
            </div>

            {/* Image Gallery */}
            <div className="row image-gallery mt-5">
              <div className="col-md-6">
                <div className="image-card">
                 <Link to="/Products"><img src={ProduitsPharmaceutiquesIMGn1} alt="Pharmacy Product 1" className="img-fluid" /></Link>
                  <div className="image-overlay">
                    <p className="overlay-text">Nos produits pharmaceutiques</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="image-card">
                  <img src={Soinsetbienêtre} alt="Pharmacy Product 2" className="img-fluid" />
                  <div className="image-overlay">
                    <p className="overlay-text">Soins et bien-être</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="welcome-section">
          <p>* Votre pharmacie de confiance offrant des conseils professionnels et des produits de santé de qualité. *</p>
        </section>


        <section id="services" className="services-section">
  <div className="container">
    <div className="section-header">
      <h2 className="section-title-Nos-Services">Nos Services</h2>
      <p className="section-description">
        Découvrez les services de qualité offerts par la Pharmacie Sarra Chehata. Nous mettons un point d'honneur à prendre soin de votre santé avec des solutions personnalisées et adaptées à vos besoins.
      </p>
    </div>

    <div className="row services-list">
      <div className="col-md-4 service-card">
        <div className="service-icon">
          <i className="fas fa-prescription-bottle-alt"></i>
        </div>
        <h3 className="service-title">Délivrance d'ordonnances</h3>
        <p className="service-description">
          Nous délivrons vos médicaments sur ordonnance avec une consultation rapide et des conseils personnalisés pour assurer votre bien-être.
        </p>
      </div>

      <div className="col-md-4 service-card">
        <div className="service-icon">
          <i className="fas fa-user-md"></i>
        </div>
        <h3 className="service-title">Conseils en santé</h3>
        <p className="service-description">
          Notre équipe de professionnels est disponible pour vous fournir des conseils personnalisés sur les produits de santé et de bien-être.
        </p>
      </div>

      <div className="col-md-4 service-card">
        <div className="service-icon">
          <i className="fas fa-capsules"></i>
        </div>
        <h3 className="service-title">Produits pharmaceutiques</h3>
        <p className="service-description">
          Découvrez notre large gamme de médicaments, produits cosmétiques et de bien-être pour répondre à tous vos besoins quotidiens.
        </p>
      </div>
    </div>

    <div className="section-cta">
      <h3 className="cta-title">Visitez notre pharmacie</h3>
      <p className="cta-text">
        Venez découvrir nos services et bénéficiez de l'expertise de notre équipe. Nous sommes là pour vous accompagner dans chaque étape de votre santé.
      </p>
      <a href="/Services" className="button-services">Voir nos services</a>
    </div>
  </div>
</section>


{/** Services Section Home **/}
 
<section className="Home-services">
      <div className="container-services-home">
        <h2 className="services-section-title">Nos Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <span className="service-icon">&#128660;</span>
            <h3 className="service-title">Livraison Rapide</h3>
            <p className="service-description">Partout en Tunisie</p>
          </div>
          <div className="service-card">
            <span className="service-icon">&#127873;</span>
            <h3 className="service-title">Coupons et Réductions</h3>
            <p className="service-description">Des offres exclusives</p>
          </div>
          
        </div>
      </div>
    </section>

        {/* Contact Section */}
        <Contactform/>

      </main>
    </div>
  );
}

export default Home;