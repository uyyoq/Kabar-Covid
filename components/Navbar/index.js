import React from 'react'

function Navbar() {
  return (
    // Navigation  
    <nav className="flex fixed bg-gray-300 w-full top-0 right-0 p-4">
      <div className="flex ml-3">
        <button className="w-6 h-auto cursor-pointer">
          <img src="/menu.svg" alt="menu" />
        </button>
      </div>
      <div className="flex items-center">
        <a href="#" className="p-3">
          <img src="/kabarcovid-logo.svg" className="w-auto h-3" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
