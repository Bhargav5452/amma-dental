import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import './About.css';
import doctorPremImg from '../assets/doctor-prem.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

function About() {
  return (
    <div className="about-page">
      <section className="container">
        <motion.div 
          className="page-header browser-frame text-center flex flex-col justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="page-title">About Amma Dental</h1>
          <p className="page-subtitle">Compassionate care, modern equipment, and a patient-first approach to dentistry.</p>
        </motion.div>
      </section>

      <motion.section 
        className="container section-padding"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
      >
        <div className="mission-section flex">
          <div className="mission-content flex-1 flex flex-col justify-center">
            <span className="eyebrow">• OUR MISSION</span>
            <h2 className="section-title text-3xl mb-6">Bringing smiles to life, gently.</h2>
            <p className="mission-text mb-6">
              At Amma Dental, we believe that a healthy smile is the foundation of confidence and well-being. Our clinic was founded on the principle that dental care should be accessible, transparent, and completely free of anxiety. 
            </p>
            <p className="mission-text">
              We combine the latest in dental technology with a warm, welcoming environment to ensure every patient feels like family.
            </p>
          </div>
          <div className="mission-image flex-1">
            <img src={doctorPremImg} alt="Dr. Prem" className="w-full h-full object-cover" />
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="values-section container mb-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <motion.span className="eyebrow" variants={fadeUp}>• CORE VALUES</motion.span>
        <motion.h2 className="section-title mb-12" variants={fadeUp}>Why Choose Us</motion.h2>
        
        <div className="values-grid">
          <motion.div className="value-card hover-lift" variants={fadeUp}>
            <div className="value-icon">01</div>
            <h3>Gentle Care</h3>
            <p>Pain-free techniques and a calming environment tailored for anxious patients.</p>
          </motion.div>
          <motion.div className="value-card hover-lift" variants={fadeUp}>
            <div className="value-icon">02</div>
            <h3>Transparent Treatment</h3>
            <p>Clear explanations, honest advice, and no hidden costs in our treatment plans.</p>
          </motion.div>
          <motion.div className="value-card hover-lift" variants={fadeUp}>
            <div className="value-icon">03</div>
            <h3>Modern Dentistry</h3>
            <p>State-of-the-art diagnostic tools and advanced procedures for optimal results.</p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default About;
