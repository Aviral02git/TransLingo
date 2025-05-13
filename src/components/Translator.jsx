import React, { useState } from 'react';
import './Translator.css';

const Translator = () => {
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState('');
  const [language, setLanguage] = useState('es'); // default to Spanish

  const handleTranslate = () => {
    // Dummy translation logic for now
    setTranslated(`Translated to ${language.toUpperCase()}: ${text}`);
  };

  return (
    <div className="translator-container">
      <h3 className="translator-title"> 🌏 Language Translator</h3>
      <div className="translator-form">
        <textarea
          placeholder="Enter text to translate..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="hi">Hindi</option>
          <option value="zh">Chinese</option>
          {/* Add more languages as needed */}
        </select>
        <button className="translate-button" onClick={handleTranslate}>
          Translate
        </button>
      </div>
      {translated && (
        <div className="translation-result">{translated}</div>
      )}
    </div>
  );
};

export default Translator;
