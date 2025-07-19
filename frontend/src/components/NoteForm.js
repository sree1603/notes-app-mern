import React, { useState, useEffect } from 'react';

function NoteForm({ onSave, noteToEdit, clearEdit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setContent(noteToEdit.content);
    }
  }, [noteToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onSave({ title, content, id: noteToEdit?.id || Date.now() });
      setTitle('');
      setContent('');
      if (noteToEdit) clearEdit();
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={styles.textarea}
      />
      <button type="submit" style={styles.button}>
        {noteToEdit ? 'Update Note' : 'Save Note'}
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px auto',
    maxWidth: '400px'
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px'
  },
  textarea: {
    padding: '10px',
    height: '100px',
    fontSize: '16px',
    marginBottom: '10px'
  },
  button: {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer'
  }
};

export default NoteForm;
