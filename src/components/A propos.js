import React from 'react';
import '../Styles/StylesApropos.css';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className="about-page">


      <Helmet>
        <title>A propos de nous</title>
      </Helmet>
      {/* First Banner Section */}
      <header className="about-header about-header-1">
        <div className="banner-content">
          <h1 className="about-title">À propos de Pharmacie Sarra Chehata</h1>
        </div>
      </header>

      

      {/* Mission Section */}
      <section className="about-mission">
        <div className="about-container">
          <h2 className="section-title">Notre Mission</h2>
          <p className="about-text">
            La Pharmacie Sarra Chehata est plus qu'un simple endroit pour acheter des médicaments. Nous nous engageons à offrir des soins de santé holistiques qui répondent aux besoins uniques de chaque client. Avec un service rapide, professionnel et à l'écoute, nous visons à améliorer la qualité de vie de nos patients à travers des solutions de santé adaptées.
          </p>
        </div>
      </section>

      {/* Second Banner Section */}
      <header className="about-header about-header-2">
        <div className="banner-content">
          <h2 className="about-subtitle">Votre santé, notre priorité</h2>
        </div>
      </header>

      {/* Values Section */}
      <section className="about-values">
        <div className="about-container">
          <h2 className="section-title">Nos Valeurs</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Qualité</h3>
              <p>Nous ne proposons que des produits de santé soigneusement sélectionnés, afin de garantir leur efficacité et leur sécurité.</p>
            </div>
            <div className="value-card">
              <h3>Professionnalisme</h3>
              <p>Nos experts sont dédiés à fournir des conseils de santé personnalisés, en vous accompagnant tout au long de votre parcours santé.</p>
            </div>
            <div className="value-card">
              <h3>Confiance</h3>
              <p>Nous bâtissons des relations solides avec nos patients, fondées sur la transparence, la responsabilité et le respect de la confidentialité.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
