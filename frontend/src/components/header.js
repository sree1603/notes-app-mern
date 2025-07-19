import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1>📝 My Notes App</h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#f5f5f5',
    padding: '10px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }
};

export default Header;
