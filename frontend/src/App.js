import React, { useState } from 'react';
import Header from './components/header';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  const handleSaveNote = (note) => {
    if (editingNote) {
      setNotes(notes.map(n => (n.id === note.id ? note : n)));
    } else {
      setNotes([...notes, note]);
    }
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
  };

  const clearEdit = () => setEditingNote(null);

  return (
    <div>
      <Header />
      <NoteForm onSave={handleSaveNote} noteToEdit={editingNote} clearEdit={clearEdit} />
      <NoteList notes={notes} onEditNote={handleEditNote} onDeleteNote={handleDeleteNote} />
    </div>
  );
}

export default App;
