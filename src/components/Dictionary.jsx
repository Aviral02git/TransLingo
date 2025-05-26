import React from 'react';
import './Dictionary.css';

const vocabulary = [
  { word: "Hello", translation: "Hola", category: "Greetings" },
  { word: "Thank you", translation: "Gracias", category: "Politeness" },
  { word: "Where is the bathroom?", translation: "¿Dónde está el baño?", category: "Essentials" },
  { word: "Good morning", translation: "Buenos días", category: "Greetings" },
  { word: "I need help", translation: "Necesito ayuda", category: "Emergency" },
];

const Dictionary = () => {
  return (
    <div className="dictionary-container">
      <h2 className="dictionary-title"> TransLingo Dictionary</h2>
      <p className="dictionary-subtitle">Explore essential words and their meanings with ease.</p>

      <div className="dictionary-grid">
        {vocabulary.map((item, index) => (
          <div key={index} className="dictionary-card">
            <div className="card-header">
              <h4 className="card-word">{item.word}</h4>
              <span className="card-category">{item.category}</span>
            </div>
            <p className="card-translation">{item.translation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dictionary;
