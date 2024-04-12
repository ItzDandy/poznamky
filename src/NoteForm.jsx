// NoteForm.js
import React, { useState } from 'react';

function FormularPoznamky({ pridejPoznamku }) {
  const [text, nastavText] = useState('');

  const zmenaTextu = (e) => {
    nastavText(e.target.value);
  };

  const odeslaniFormulare = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    pridejPoznamku(text);
    nastavText('');
  };

  return (
    <form onSubmit={odeslaniFormulare}>
      <input type="text" value={text} onChange={zmenaTextu} />
      <button type="submit">Přidat poznámku</button>
    </form>
  );
}

export default FormularPoznamky;
