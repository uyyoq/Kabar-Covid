import React from 'react'

function Navbar() {
  return (
    // Navigation  
    <nav className="flex fixed items-center justify-center bg-white shadow w-full top-0 right-0 p-4">
      <div className="flex self-center">
        <a href="#" className="p-3">
          <img src="/kabarcovid-logo.svg" className="w-auto h-5" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
