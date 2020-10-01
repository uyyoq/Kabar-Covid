import React from 'react'

const CardList = (props) => {
  return (
    <div className="my-0 mx-auto">
      <div className="flex justify-center content-center m-3 items-start w-auto md:pl-32">

        <div className="flex items-center justify-center pt-1">
          <div className="rounded-md bg-black w-2 h-2"></div>
        </div>

        <div className="flex flex-col justify-center w-full">
          <div className="text-base">
            <a href={props.url} target="_blank">
              <div className="pl-2 pr-4 font-semibold text-sm">
                {props.title}
              </div>
            </a>
          </div>
          <div className="flex">
            <p className="px-2 text-xs text-gray-900">{props.publishedAt}</p>
            <p className="px-2 text-xs italic text-gray-800" >{props.source}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CardList
