import React from 'react'
import Navbar from '../components/Navbar'


const KabarCovid = ({ data }) => {
  return (
    <div>
      <Navbar></Navbar>
      {
        data.articles.map(data => (
          <div>
            <a href={data.url} target="_blank">
              <h3>{data.title}</h3>
              <p>{data.publishedAt}</p>
              <p>{data.source.name}</p>
            </a>
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
