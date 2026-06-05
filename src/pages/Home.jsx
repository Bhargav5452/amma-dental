import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import './Home.css';
import heroBg from '../assets/hero-bg.png';
import doctorPremImg from '../assets/doctor-prem.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 }
  }
};

function Home() {
  return (
    <div className="home-page">

      {/* ── Hero ── */}
      <section>
        <motion.div
          className="hero-section"
          style={{ backgroundImage: `url(${heroBg})` }}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-content" style={{ paddingTop: '100px' }}>
            <motion.div
              className="hero-main flex justify-between items-end"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Title + tagline */}
              <div className="hero-left">
                <motion.h1 className="hero-title" variants={fadeUp}>
                  Trusted<br />Dental Care
                </motion.h1>
                <motion.p className="hero-tagline" variants={fadeUp}>
                  Caring & local dental care for families and individuals,<br />
                  where compassion meets quality — without the high costs.
                </motion.p>
              </div>

              {/* Floating stat card */}
              <motion.div className="hero-overlay-card" variants={fadeUp}>
                <div className="hero-card-inner flex items-center gap-3">
                  <div className="play-icon-wrap">
                    <Play size={18} className="text-primary" fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="card-title">5000+ Happy Smiles</h4>
                    <p className="card-desc">Trusted by families across Hyderabad</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── About Preview ── */}
      <motion.section
        className="about-preview container section-padding"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <div className="about-grid flex">
          <motion.div className="about-left" variants={fadeUp}>
            <span className="eyebrow">• ABOUT US</span>
            <h2 className="section-title">Transform your smile with Amma Dental</h2>
            <Link to="/about" className="about-link flex items-center gap-2">
              Learn about us <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div className="about-right" variants={fadeUp}>
            <p className="about-text">
              We're a trusted, local dental clinic committed to providing families and individuals with personalized care, genuine compassion, and professional service. Our goal is to make quality dental care accessible and your experience comfortable.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>95%</h3>
                <p>Patient Satisfaction</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Years of Care</p>
              </div>
              <div className="stat">
                <h3>5000+</h3>
                <p>Happy Patients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── Meet Dr. Prem ── */}
      <motion.section
        className="doctor-prem-section container section-padding"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
      >
        <div className="doctor-card flex">
          <div className="doctor-img-wrap">
            <img src={doctorPremImg} alt="Dr. Prem" />
          </div>
          <div className="doctor-content flex flex-col justify-center">
            <span className="eyebrow">• OUR DOCTOR</span>
            <h2 className="section-title">Meet Dr. Prem</h2>
            <p className="doctor-bio">
              With over 15 years of experience in advanced dentistry, Dr. Prem believes in a patient-first philosophy — combining cutting-edge technology with a gentle, compassionate approach to ensure every visit is stress-free.
            </p>
            <blockquote className="doctor-quote">
              "Your smile is your greatest asset. My mission is to protect and enhance it — and ensure you leave our clinic completely confident."
            </blockquote>
            <div className="doctor-stats">
              <div className="doctor-stat">
                <strong>15+</strong>
                <span>Years Experience</span>
              </div>
              <div className="doctor-stat">
                <strong>Gold</strong>
                <span>Medalist</span>
              </div>
              <div className="doctor-stat">
                <strong>MDS</strong>
                <span>Specialist</span>
              </div>
              <div className="doctor-stat">
                <strong>5000+</strong>
                <span>Patients Treated</span>
              </div>
            </div>
            <div>
              <Link to="/contact">
                <Button variant="primary" className="hover-lift">Book a consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Reviews ── */}
      <motion.section
        className="reviews-section container section-padding"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <motion.div className="reviews-header" variants={fadeUp}>
          <span className="eyebrow">• PATIENT REVIEWS</span>
          <h2 className="section-title">What our patients say</h2>
        </motion.div>
        <div className="reviews-grid">
          <motion.div className="review-card hover-lift" variants={fadeUp}>
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Dr. Prem and his team made me feel so comfortable. I used to dread the dentist, but now I actually look forward to my visits. My smile has never looked better!"</p>
            <div className="review-author">
              <div className="author-avatar">PR</div>
              <div>
                <strong>Priya Reddy</strong>
                <span>Banjara Hills, Hyderabad</span>
              </div>
            </div>
          </motion.div>
          <motion.div className="review-card hover-lift" variants={fadeUp}>
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Got my dental implants done here. The procedure was completely painless and the results look incredibly natural. Couldn't be happier with the outcome."</p>
            <div className="review-author">
              <div className="author-avatar">SK</div>
              <div>
                <strong>Suresh Kumar</strong>
                <span>Jubilee Hills, Hyderabad</span>
              </div>
            </div>
          </motion.div>
          <motion.div className="review-card hover-lift" variants={fadeUp}>
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Brought my whole family here. The kids love it — the staff is so patient and gentle. Transparent pricing, no hidden costs. Truly the best dental clinic in Hyderabad."</p>
            <div className="review-author">
              <div className="author-avatar">AM</div>
              <div>
                <strong>Ananya Mehta</strong>
                <span>Gachibowli, Hyderabad</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── Final CTA ── */}
      <motion.section
        className="cta-section container"
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

export default Home;
