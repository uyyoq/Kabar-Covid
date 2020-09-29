import React from 'react'
import Navbar from '../components/Navbar'
import CardList from '../components/CardList/cardList'
import Footer from '../components/Footer/footer'

const KabarCovid = ({ data }) => {
  return (
    <div className="mt-24">
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
      <Footer />
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
