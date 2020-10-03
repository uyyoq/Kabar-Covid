import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import CardList from '../components/CardList/cardList'
import Footer from '../components/Footer/footer'
import axios from "axios"
import { getArticle } from "../constant/api"
import InfiniteScroll from 'react-infinite-scroll-component';


const KabarCovid = () => {
  const [page, setPage] = useState(1);
  const [dataArticles, setDataArticles] = useState([]);

  useEffect(async () => {
    const res = await axios.get(`${getArticle(page)}`);
    setDataArticles(res.data.articles)
  }, [])

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${getArticle(page)}`);
      setDataArticles(dataArticles.concat(res.data.articles))
    }

    if (dataArticles !== []) {
      setTimeout(()=>{
        fetch();
      },1500)
    }
  }, [page])

  const fetchMoreData = () => {
    setPage(page + 1);
  }

  return (
    <div className="flex flex-col justify-center items-baseline pt-24 w-full my-0 mx-auto md:w-1/2">
      <Navbar />
      <InfiniteScroll
        dataLength={dataArticles.length} // this props should arrays
        next={fetchMoreData} // event call when
        hasMore={true}
        loader={<h1><strong>Loading...</strong></h1>}
      >
        {
          dataArticles.map(data => (
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
      </InfiniteScroll >

      <Footer />
    </div>
  )
}

// export async function getStaticProps() {
//   const res = await fetch('https://newsapi.org/v2/everything?q=covid&apiKey=4055e2c89faa40e384b1dd16c0daef44')
//   const data = await res.json()
//   return {
//     props: {
//       data,
//     },
//   }
// }


export default KabarCovid
