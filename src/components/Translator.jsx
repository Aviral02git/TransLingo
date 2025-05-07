
import React, { useState } from 'react';

const Translator = () => {
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState('');

  const handleTranslate = () => {
    
    setTranslated("Translated: " + text);
  };

  return (
    <div>
      <h3>Language Translator</h3>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleTranslate}>Translate</button>
      <p>{translated}</p>
    </div>
  );
};

export default Translator;
