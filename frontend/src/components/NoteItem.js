import React from 'react';

function NoteItem({ note, onEdit, onDelete }) {
  return (
    <div style={styles.card}>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => onEdit(note)} style={styles.edit}>Edit</button>
      <button onClick={() => onDelete(note.id)} style={styles.delete}>Delete</button>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: 'white',
    padding: '15px',
    margin: '10px auto',
    maxWidth: '400px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    borderRadius: '8px'
  },
  edit: {
    marginRight: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '5px 10px'
  },
  delete: {
    backgroundColor: '#DC3545',
    color: 'white',
    border: 'none',
    padding: '5px 10px'
  }
};

export default NoteItem;
