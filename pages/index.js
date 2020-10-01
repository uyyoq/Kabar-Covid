import React from 'react'
import Navbar from '../components/Navbar'
import CardList from '../components/CardList/cardList'


const KabarCovid = ({ data }) => {
  return (
    <div className="flex flex-col justify-center align-center pt-24 w-full my-0 mx-auto md:w-2/4">
      <Navbar />
      {
        data.articles.map(data => (
          <div>
            <a href={data.url} target="_blank">
              <CardList
                title={data.title}
                publishedAt={data.publishedAt}
                source={data.source.name}
              />
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
