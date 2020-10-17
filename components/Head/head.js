import Head from 'next/head'
import FavIcon from '../fav'

const HeadComponent = () => {
  return(
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kabar Covid</title>
        <FavIcon />


      </Head>
    </>
  )
}

export default HeadComponent