import React from 'react'
import Link from "next/link"


function Navbar() {
  return (
    // Navigation  
    <nav className="fixed mx-auto bg-white shadow w-full h-20 top-0 right-0 z-10 p-8">
      <div className="mx-auto">
        <a href="#" className="">
          <Link href="/">
            <a>
              <img src="/kabarcovid-logo.svg" className="w-auto h-5 mx-auto" />
            </a>
          </Link>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
