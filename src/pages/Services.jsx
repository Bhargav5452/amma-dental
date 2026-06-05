import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import './Services.css';
import servicesBg from '../assets/services-bg.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const services = [
  {
    num: '01',
    title: 'Dental Fillings',
    desc: 'Restore decayed or damaged teeth with natural-looking, long-lasting dental fillings that protect, strengthen, and blend seamlessly with your smile.'
  },
  {
    num: '02',
    title: 'Teeth Whitening',
    desc: 'Professional-grade whitening treatments that lift deep stains and brighten your smile by several shades — safely and comfortably.'
  },
  {
    num: '03',
    title: 'Oral Surgery',
    desc: 'From wisdom tooth extractions to corrective jaw procedures, our oral surgery services are performed with precision and care.'
  },
  {
    num: '04',
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking replacements for missing teeth that restore your smile, bite, and confidence for life.'
  },
  {
    num: '05',
    title: 'Root Canal Treatment',
    desc: 'Painless endodontic therapy that saves infected or severely damaged teeth, eliminating pain and preserving your natural smile.'
  },
  {
    num: '06',
    title: 'Cosmetic Dentistry',
    desc: 'Veneers, bonding, and full smile makeovers designed to enhance your natural beauty and give you total confidence.'
  },
];

const whyUs = [
  { stat: '15+', label: 'Years of Experience', desc: 'Dr. Prem brings over 15 years of advanced dental expertise.' },
  { stat: '5000+', label: 'Patients Treated', desc: 'Thousands of smiles transformed across Hyderabad.' },
  { stat: '95%', label: 'Satisfaction Rate', desc: 'Our patients rate us 5 stars — consistently.' },
  { stat: '0', label: 'Hidden Costs', desc: 'Transparent pricing with no surprises, ever.' },
];

function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="services-page">

      {/* ── Hero Section ── */}
      <section className="container svc-hero-wrap">
        <motion.div
          className="svc-hero"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Left */}
          <div className="svc-hero-left flex flex-col justify-between">
            <div>
              <span className="svc-eyebrow">• OUR SERVICE</span>
              <h1 className="svc-hero-title">Caring for your smile<br />with every service</h1>
              <Link to="/contact">
                <Button variant="secondary" className="hover-lift svc-book-btn">Book an appointment</Button>
              </Link>
            </div>

            <motion.div
              className="svc-list"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  className={`svc-list-item ${activeService === i ? 'active' : ''}`}
                  variants={fadeUp}
                  onClick={() => setActiveService(i)}
                >
                  <div className="svc-list-row">
                    <span className="svc-num">({s.num})</span>
                    <span className="svc-name">{s.title}</span>
                  </div>
                  <AnimatePresence>
                    {activeService === i && (
                      <motion.p
                        className="svc-desc"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {s.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image */}
          <div className="svc-hero-img">
            <img src={servicesBg} alt="Dental treatment" />
          </div>
        </motion.div>
      </section>

      {/* ── Why Choose Us ── */}
      <motion.section
        className="container section-padding"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <motion.div className="svc-section-header" variants={fadeUp}>
          <span className="eyebrow">• WHY CHOOSE US</span>
          <h2 className="section-title">Dentistry done differently</h2>
        </motion.div>

        <div className="why-grid">
          {whyUs.map((item, i) => (
            <motion.div key={i} className="why-card browser-frame" variants={fadeUp}>
              <strong className="why-stat">{item.stat}</strong>
              <h3 className="why-label">{item.label}</h3>
              <p className="why-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Process Section ── */}
      <motion.section
        className="container section-padding"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <motion.div className="svc-section-header" variants={fadeUp}>
          <span className="eyebrow">• HOW IT WORKS</span>
          <h2 className="section-title">Your journey to a better smile</h2>
        </motion.div>

        <div className="process-steps">
          {[
            { step: '01', title: 'Book a Consultation', desc: "Schedule online or call us. We'll find a time that works for you — same-week slots available." },
            { step: '02', title: 'Diagnosis & Planning', desc: 'Dr. Prem conducts a thorough examination and creates a personalized treatment plan.' },
            { step: '03', title: 'Treatment', desc: 'We carry out your treatment with precision, care, and the latest dental technology.' },
            { step: '04', title: 'Follow-up & Care', desc: "We check in after your treatment to ensure you're healing well and feeling great." },
          ].map((item, i) => (
            <motion.div key={i} className="process-step" variants={fadeUp}>
              <span className="process-num">{item.step}</span>
              <div className="process-content">
                <h3 className="process-title">{item.title}</h3>
                <p className="process-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── CTA ── */}
      <motion.section
        className="container"
        style={{ paddingBottom: '5rem' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
      >
        <div className="cta-block">
          <span className="cta-eyebrow">• READY TO SMILE?</span>
          <h2 className="cta-title">Book your appointment today</h2>
          <p className="cta-sub">Same-week slots available · Walk-ins welcome · No hidden costs</p>
          <div className="cta-actions flex gap-4">
            <Link to="/contact">
              <Button variant="secondary" className="hover-lift">Book an appointment</Button>
            </Link>
            <a href="tel:+919876543210">
              <Button variant="ghost" className="hover-lift">Call us now</Button>
            </a>
          </div>
        </div>
      </motion.section>

    </div>
  );
}

export default Services;
