import React from 'react';
import Progress from '../components/Progress';
import bannerImg from '../Service-banner.png'; // adjust the path if needed

import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "center",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1>Explore Our Language Learning Services</h1>
        <p>Fun, interactive and tailored just for you!</p>
      </section>

      <section className="services-grid">
        <div className="service-card">
          <h3>🗣️ Vocabulary Builder</h3>
          <p>Master new words daily with interactive flashcards and pronunciation guides.</p>
        </div>
        <div className="service-card">
          <h3>🎯 Daily Quizzes</h3>
          <p>Take fun short quizzes to test and strengthen your memory.</p>
        </div>
        <div className="service-card">
          <h3>📚 Personalized Lessons</h3>
          <p>Learn at your pace with lessons matched to your skill level and goals.</p>
        </div>
        <div className="service-card">
          <h3>🔥 Streak Tracker</h3>
          <p>Keep your streak alive and stay consistent with your learning journey!</p>
        </div>
      </section>

      <section className="progress-section">
        <Progress />
      </section>
    </div>
  );
};

export default Services;
