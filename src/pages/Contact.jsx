import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import './Contact.css';
import consultationImg from '../assets/consultation.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you within 24 hours.");
  };

  return (
    <div className="contact-page">

      {/* Header */}
      <section className="container">
        <motion.div
          className="contact-page-header"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="contact-eyebrow">• BOOK AN APPOINTMENT</span>
          <h1 className="contact-page-title">Book an Appointment</h1>
          <p className="contact-page-subtitle">
            Ready for a healthier smile? Book your visit or reach out with any questions below.
          </p>
        </motion.div>
      </section>

      {/* Contact Layout */}
      <motion.section
        className="container contact-body"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
      >
        <div className="contact-layout">

          {/* Left: Info */}
          <motion.div className="contact-info-col" variants={fadeUp}>
            <div className="info-card">
              <span className="card-eyebrow">• CONTACT US</span>
              <h2 className="card-title">Clinic Details</h2>

              <div className="info-list">
                <div className="info-item">
                  <h4>Phone Number</h4>
                  <a href="tel:+919876543210" className="info-value">+91 98765 43210</a>
                </div>
                <div className="info-item">
                  <h4>Email Address</h4>
                  <a href="mailto:hello@ammadental.in" className="info-value">hello@ammadental.in</a>
                </div>
                <div className="info-item">
                  <h4>Clinic Address</h4>
                  <p className="info-value">Road No. 12, Banjara Hills,<br />Hyderabad, Telangana 500034</p>
                </div>
                <div className="info-item">
                  <h4>Clinic Hours</h4>
                  <p className="info-value">Mon – Sat: 9:00 AM – 8:00 PM<br />Sunday: Closed</p>
                </div>
              </div>

              <div className="contact-img">
                <img src={consultationImg} alt="Dental Consultation" />
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div className="contact-form-col" variants={fadeUp}>
            <div className="form-card">
              <span className="card-eyebrow">• APPOINTMENT</span>
              <h2 className="card-title">Book a Visit</h2>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" required placeholder="John Doe" />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" required placeholder="+91 00000 00000" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" required placeholder="john@example.com" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Needed</label>
                    <select id="service" required>
                      <option value="">Select a service...</option>
                      <option value="general">General Checkup</option>
                      <option value="whitening">Teeth Whitening</option>
                      <option value="cosmetic">Cosmetic Dentistry</option>
                      <option value="implant">Dental Implants</option>
                      <option value="rootcanal">Root Canal</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Preferred Date</label>
                    <input type="date" id="date" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message (Optional)</label>
                  <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
                </div>

                <Button variant="primary" type="submit" className="submit-btn hover-lift">
                  Submit Request
                </Button>
                <p className="form-note">We'll get back to you within 24 hours.</p>
              </form>
            </div>
          </motion.div>

        </div>
      </motion.section>

    </div>
  );
}

export default Contact;
