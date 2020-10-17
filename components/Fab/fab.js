import React from 'react'
import Link from 'next/link'

const Fab = () => {
  return (
    <div>
      <Link href="/graphic">
        <a>
          <div className="flex fixed bottom-0 right-0 w-full bg-white md:bg-transparent justify-center md:justify-end md:pr-16 md:pb-3 ">
            <img className="w-12 h-auto py-1 md:pb-4 md:w-18 lg:w-20 " src="/FAB_kabar_covid.svg" alt="Data Covid" />
          </div>
        </a>
      </Link>

    </div>
  )
}

export default Fab