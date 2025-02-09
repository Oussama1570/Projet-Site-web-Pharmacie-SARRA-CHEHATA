import React, { useState } from 'react';
import { Card, Row, Modal, Button } from 'react-bootstrap';
import { FaStethoscope, FaShippingFast, FaRegSmileBeam } from 'react-icons/fa';
import '../Styles/StylesServices.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// List of services offered by the pharmacy
const services = [
  {
    name: 'Consultation Pharmaceutique',
    description:
      'Bénéficiez de conseils médicaux personnalisés grâce à nos pharmaciens diplômés.',
    icon: <FaStethoscope className="service-icon" />, // Icon for the service
    detailedInfo:
      "Nos pharmaciens vous guideront sur l'utilisation de vos médicaments et alternatives.",
    list: [
      'Conseils personnalisés pour vos médicaments.',
      'Information sur les interactions possibles.',
      'Recommandations sur les traitements alternatifs.',
    ],
  },
  {
    name: 'Soins de la Peau & Beauté',
    description:
      'Explorez une large gamme de produits cosmétiques adaptés à tous les types de peau.',
    icon: <FaRegSmileBeam className="service-icon" />,
    detailedInfo:
      "Nos produits de beauté sont adaptés aux différents types de peau pour un soin optimal.",
    list: [
      'Produits cosmétiques adaptés à chaque type de peau.',
      'Soins anti-âge, hydratants et plus.',
      'Solutions de beauté naturelle et saine.',
    ],
  },
  {
    name: 'Service de Livraison',
    description:
      'Nous vous proposons un service de livraison rapide et fiable directement à votre porte.',
    icon: <FaShippingFast className="service-icon" />,
    detailedInfo:
      "Notre service de livraison garantit une expédition rapide avec suivi en temps réel.",
    list: [
      'Livraison rapide et fiable.',
      'Suivi en temps réel de vos commandes.',
      'Livraison à l\'adresse de votre choix.',
    ],
  },
];

const Services = () => {
  // State to manage the modal visibility
  const [show, setShow] = useState(false);
  
  // State to store the selected service for detailed view
  const [selectedService, setSelectedService] = useState(null);

  /**
   * Handles opening the modal and setting the selected service
   * @param {Object} service - The service object to display details
   */
  const handleShow = (service) => {
    setSelectedService(service);
    setShow(true);
  };

  /**
   * Handles closing the modal
   */
  const handleClose = () => setShow(false);

  return (
    <div className="services-section">
      <Helmet>
        <title>Nos services</title>
      </Helmet>

      <div className="services-container">
        <h2 className="services-title">Nos Services</h2>

        {/* Short description of services */}
        <div className="service-list">
          <p><strong>Consultations Pharmaceutiques :</strong> Obtenez des conseils personnalisés.</p>
          <p><strong>Livraison de Médicaments :</strong> Service rapide et fiable directement chez vous.</p>
          <p><strong>Soins de Beauté :</strong> Produits adaptés pour un soin optimal.</p>

          <Link to={"/Produits"}>
            <button className="button">See our Products</button>
          </Link>
        </div>

        <hr />

        {/* Display service cards */}
        <Row className="service-cards-row">
          {services.map((service, index) => (
            <div key={index} className="service-card-col">
              <Card className="service-card">
                <Card.Body>
                  {service.icon}
                  <Card.Title>{service.name}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Button
                    className="learn-more-services-btn"
                    variant="primary"
                    onClick={() => handleShow(service)}
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Row>

        {/* Modal for displaying detailed service information */}
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedService?.name} - Détails</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedService?.detailedInfo}</p>
            <ul>
              {selectedService?.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Fermer</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Services;
