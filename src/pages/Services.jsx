import React from 'react';
import Progress from '../components/Progress';
import bannerImg from '../Service-banner.png';
import Translator from '../components/Translator';
import Dictionary from '../components/Dictionary';
import Quiz from '../components/Quiz';
import './Services.css'; // Make sure you update this CSS file

const Services = () => {
  return (
    <div className="services-container">

      {/* Hero Banner */}
      <section className="herobanner-section">
  <div className="hero-text">
    <h1>Explore Our Language Learning Services</h1>
    <p>Fun, interactive and tailored just for you!</p>
  </div>
  <div className="hero-image">
    <img src={bannerImg} alt="Language Learning Banner" />
  </div>
</section>

      

      {/* Services Grid */}
      <section className="services-grid">
        {/* Vocabulary Builder */}
        <div className="service-card">
          <h3>🗣️ Vocabulary Builder</h3>
          <p>Master new words daily with interactive flashcards and pronunciation guides.</p>
          <Dictionary />
        </div>

        {/* Daily Quizzes */}
        <div className="service-card">
          <h3>🎯 Daily Quizzes</h3>
          <p>Take fun short quizzes to test and strengthen your memory.</p>
          <Quiz />
        </div>

        {/* Personalized Lessons */}
        <div className="service-card">
          <h3>📚 Personalized Lessons</h3>
          <p>Learn at your own pace with curated lesson paths that match your current proficiency and long-term language goals. Whether you're a beginner or looking to polish your fluency, our modules cover every essential area to help you grow with confidence.</p>
          <ul className="lesson-list">
            <li>Greetings & Introductions</li>
            <li>Travel & Directions</li>
            <li>Food & Restaurant Phrases</li>
            <li>Verb Tenses & Grammar</li>
            <li>Everyday Conversations</li>
          </ul>
          <button className="start-lesson-btn">Start Learning</button>
        </div>

        {/* Streak Tracker */}
        <div className="service-card">
          <h3>🔥 Streak Tracker</h3>
          <p>Keep your streak alive and stay consistent with your learning journey!</p>
        </div>
      </section>

      {/* Progress & Translator Section */}
      <section className="extras-section">
        <div className="extra-card">
          <h3>📈 Your Learning Progress</h3>
          <Progress />
        </div>
        <div className="extra-card">
          <h3>🌐 Instant Translator</h3>
          <Translator />
        </div>
      </section>
    </div>
  );
};

export default Services;

