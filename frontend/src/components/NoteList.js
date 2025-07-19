import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onEditNote, onDeleteNote }) {
  return (
    <div>
      {notes.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No notes yet.</p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onEdit={onEditNote}
            onDelete={onDeleteNote}
          />
        ))
      )}
    </div>
  );
}

export default NoteList;
