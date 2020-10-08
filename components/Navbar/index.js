import React from 'react'

function Navbar() {
  return (
    // Navigation  
    <nav className="fixed mx-auto bg-white shadow w-full h-24 top-0 right-0 p-4">
      <div className="mx-auto">
        <a href="#" className="p-3">
          <img src="/kabarcovid-logo.svg" className="w-auto h-5 mx-auto" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
