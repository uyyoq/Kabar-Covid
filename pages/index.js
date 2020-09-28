import React from 'react'
import Navbar from '../components/Navbar'


const KabarCovid = ({ data }) => {
  return (
    <div className="mt-24">
      <Navbar />
      {
        data.articles.map(data => (
          <div>
            <div className="flex flex-row justify-center items-baseline">

              <div className="">
                <div className="rounded-md bg-black w-3 h-3"></div>
              </div>

              <div className="flex flex-col justify-center">

                <div className="text-base">
                  <a href={data.url} target="_blank">
                    <div className="pl-2 pr-4 font-semibold">{data.title}</div>
                  </a>
                </div>

                <div className="flex flex-row">
                  <p className="px-2 text-sm">{data.publishedAt}</p>
                  <p className="px-2 text-sm italic" >{data.source.name}</p>
                </div>
              </div>

            </div>
          </div>
        ))
      }

    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://newsapi.org/v2/everything?q=covid&apiKey=4055e2c89faa40e384b1dd16c0daef44')
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}


export default KabarCovid
