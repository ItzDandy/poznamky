import React from 'react';

const NoteList = ({ poznamky, smazPoznamku }) => {
  return (
    <div className="note-list">
      {poznamky.map(poznamka => (
        <div key={poznamka.id} className="note-card">
          <p>{poznamka.text}</p>
          <button onClick={() => smazPoznamku(poznamka.id)} className="delete-button">Smazat</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
