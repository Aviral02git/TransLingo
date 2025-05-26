import React, { useState } from 'react';
import './Translator.css';

const Translator = () => {
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState('');
  const [language, setLanguage] = useState('fr'); // default to French

  const handleTranslate = async () => {
    try {
      const params = new URLSearchParams();
      params.append("source_language", "en");
      params.append("target_language", language);
      params.append("text", text);
  
      const response = await fetch("https://text-translator2.p.rapidapi.com/translate", {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key": "8aba8eeea5msh25f480eab56c4fbp107cd1jsn44acf57d06e6",
          "X-RapidAPI-Host": "text-translator2.p.rapidapi.com"
        },
        body: params
      });
  
      const data = await response.json();
      const translatedText = data.data.translatedText;
  
      if (translatedText) {
        setTranslated(`Translated to ${language.toUpperCase()}: ${translatedText}`);
      } else {
        setTranslated("Translation failed. Please check the input or try again later.");
      }
    } catch (error) {
      console.error("Translation error:", error);
      setTranslated("Error translating text. Please try again.");
    }
  };
  

  return (
    <div className="translator-container">
      <h3 className="translator-title">  Language Translator</h3>
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
