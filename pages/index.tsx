import React from 'react'
import Axios, { AxiosResponse } from 'axios'
import Head from 'next/head'
import ArticleItem from '../components/ArticleItem'
import { Article } from '../types/Article'

function Home (props) {
  const articles = props.articles.map(
    (article: Article) => <ArticleItem key={article.id} id={article.id} attributes={article.attributes} />
  )

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <div id="articles">{articles}</div>
    </>
  )
}

export default Home

export async function getStaticProps () {
  const articlesResponse: AxiosResponse = await Axios.get('http://localhost:1337/api/articles?sort=publishedAt:desc')

  return {
    props: {
      articles: articlesResponse.data.data
    }
  }
}
