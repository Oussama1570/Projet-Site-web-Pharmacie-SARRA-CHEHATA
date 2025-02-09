import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaCapsules } from "react-icons/fa"; // Medical-related icon
import "../Styles/StylesContact-form.css";
import ContactImg from "../Images/Pharmacie Sarra Chehata Contact.jpg"

export const Contactform = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nxtmqax", "template_g015o7k", form.current, {
        publicKey: "_H4HpEDqLEbHtvf1E",
      })
      .then(
        () => {
          alert("Message envoyé avec succès !");
          e.target.reset();
        },
        (error) => {
          alert("Échec de l'envoi du message. Veuillez réessayer plus tard.");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2 className="contact-title">
          <FaCapsules className="medical-icon" /> Contactez-nous
        </h2>
        <p className="contact-subtitle">
        "Une question sur un médicament, un conseil santé ou la livraison de vos produits ?
         Écrivez-nous, notre équipe vous répondra rapidement et vous assurera un service de
         livraison rapide et fiable !"
          
        </p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Nom :</label>
            <input type="text" name="from_name" id="name" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email :</label>
            <input type="email" name="reply_to" id="email" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message :</label>
            <textarea name="message" id="message" className="form-input" rows="5" required></textarea>
          </div>
          <button type="submit" className="form-submit-btn">Envoyer</button>
        </form>
      </div>
      <div className="contact-right">
        {/* This can be an image related to pharmacy, a doctor, or medicine */}
        <img  className='Contact-Img' src={ContactImg} />
      </div>
    </div>
  );
};

export default Contactform;