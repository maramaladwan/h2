
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import React, { useState } from 'react';

function App() {
  const [isParagraphVisible, setIsParagraphVisible] = useState(true);

  const toggleParagraphVisibility = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };

  return (
    <div>
      <button onClick={toggleParagraphVisibility}>Clicke me</button>
      {isParagraphVisible && <p>Hello Thee</p>}
    </div>
  );
}

export default App;
