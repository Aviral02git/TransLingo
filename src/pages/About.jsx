import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        <strong>TransLingo</strong> is an innovative language translation and learning web app built with ❤️ by
        <strong> Aviral Mishra</strong>, a first-year BTech student at <strong>Newton School of Technology</strong>.

        <br /><br />
        Developed as part of an academic capstone project in the domain of <em>Education and Learning</em>, TransLingo is designed to make language tools more accessible, interactive, and educational for users across the globe.

        <br /><br />
        <strong>What does TransLingo offer?</strong>
        <ul>
          <li><strong>Language Translator:</strong> Instantly translate text between multiple global languages.</li>
          <li><strong>Learn New Languages:</strong> Explore curated vocabulary lists, useful phrases, and interactive mini-quizzes.</li>
          <li><strong>Progress Tracker:</strong> Monitor your learning journey and improve steadily over time.</li>
        </ul>

        <br />
        Whether you're a traveller (✈️), student (🧑‍🎓), or language enthusiast(📚) — TransLingo is your one-stop tool to <em>translate and learn simultaneously</em>.

        <br /><br />
        ⚙️ <strong>Tech Stack:</strong> React, JSX, CSS, and Firebase for backend services and authentication.

        <br /><br />
        🤝 <strong>Let’s connect!</strong> I'm always open to new ideas, collaboration, and feedback.
        <br /><br />
        🔗 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/04aviralmishra/" target="_blank" rel="noopener noreferrer">linkedin.com/in/04aviralmishra</a><br />
        📧 <strong>Email:</strong> <a href="mailto:aviral.mishra004@gmail.com">aviral.mishra004@gmail.com</a>
      </p>
    </div>
  );
}

export default About;
