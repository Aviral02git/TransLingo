import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to <span className="brand-name">TransLingo</span></h1>
        <p>Your smart companion for language translation, learning, and growth — all in one place.</p>
        <a href="/signup" className="cta-button">Get Started</a>
      </section>

      <section className="features-intro">
        <h2>What is TransLingo?</h2>
        <p>
          TransLingo is more than just a translator. It's your personalized, AI-assisted platform to translate languages instantly,
          learn new vocabulary, understand real-world phrases, and practice through interactive quizzes — designed for modern learners.
        </p>
      </section>

      <section className="features-highlight">
        <h2>✨ Features That Empower You</h2>
        <ul>
          <li><strong>Instant Language Translation:</strong> Translate text in real-time between multiple global languages.</li>
          <li><strong>Language Learning Hub:</strong> Explore curated vocabulary lists, essential phrases, and flashcards.</li>
          <li><strong>Gamified Quizzes:</strong> Practice your skills with fun, interactive challenges to boost memory retention.</li>
          <li><strong>Progress Tracker:</strong> Stay motivated by tracking how far you've come in your language journey.</li>
        </ul>
      </section>

      <section className="why-section">
        <h2>Why TransLingo?</h2>
        <p>
          Whether you're a traveler, student, or curious learner — TransLingo helps you confidently connect with the world. Inspired by tools like Duolingo and Grammarly, we blend simplicity with smart tech to make learning languages accessible, personalized, and fun.
        </p>
      </section>

      <section className="final-cta">
        <h2>Join a smarter way to communicate and grow.</h2>
        <a href="/signup" className="cta-button">Start Your Language Journey</a>
      </section>
    </div>
  );
}

export default Home;
