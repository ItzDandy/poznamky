// Note.js
import React from 'react';

function Poznamka({ poznamka, smazPoznamku }) {
  return (
    <div className="poznamka">
      <p>{poznamka.text}</p>
      <button onClick={() => smazPoznamku(poznamka.id)}>Smazat</button>
    </div>
  );
}

export default Poznamka;
