import React from 'react'

function Header() {
  return (
    <div id='header'>
      <h1>CBT Journal</h1>
      <nav>
        <span className="navLinks">Home</span>
        <span className="navLinks">About</span>
        <span className="navLinks">Journal Entries Catalog</span>
        <span className="navLinks">Other Projects</span>
      </nav>
    </div>
  )
}

export default Header