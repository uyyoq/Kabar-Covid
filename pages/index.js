import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import CardList from '../components/CardList/cardList'
import Fab from '../components/Fab/fab'
import axios from "axios"
import { getArticle } from "../constant/api"
import InfiniteScroll from 'react-infinite-scroll-component';
import HeadComponent from '../components/Head/head'
// import Loading from "../components/Loading/loading"

const KabarCovid = () => {
  const [page, setPage] = useState(1);
  const [dataArticles, setDataArticles] = useState([]);

  const getDataFetch = async () => {
    const res = await axios.get(`${getArticle(page)}`);
    setDataArticles(res.data.articles)
  }

  useEffect(async () => {
    getDataFetch()
  }, [])

  useEffect(() => {
    //  fetch()
    const fetch = async () => {
      const res = await axios.get(`${getArticle(page)}`);
      setDataArticles(dataArticles.concat(res.data.articles))
    }
    if (dataArticles !== []) {
      setTimeout(() => {
        fetch()
      }, 5000)
    }
  }, [page])

  const fetchMoreData = () => {
    setPage(page + 1);
  }

  return (
    <div className="flex flex-col justify-center items-baseline pt-24 w-full my-0 mx-auto md:w-1/2">
      <HeadComponent />
      <Navbar />
      <InfiniteScroll
        dataLength={dataArticles.length} // this props should arrays
        next={fetchMoreData} // event call when
        hasMore={true}
        loader={<h1>Loading</h1>}
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

      <Fab />
    </div>
  )
}

export default KabarCovid