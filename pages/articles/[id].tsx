import Axios from 'axios'
import React from 'react'
import Article from '../../components/Article'
import { Article as ArticleType } from '../../types/Article'

export default function ViewArticle (props) {
  return (
    <Article id={props.article.id} attributes={props.article.attributes} />
  )
}

export async function getStaticProps (context) {
  const articleResponse = await Axios.get(`http://localhost:1337/api/articles/${context.params.id}`)

  return {
    props: {
      article: articleResponse.data.data
    }
  }
}

export async function getStaticPaths () {
  const articlesResponse = await Axios.get('http://localhost:1337/api/articles')

  const paths = articlesResponse.data.data.map((article: ArticleType) => (
    { params: { id: article.id.toString() } }
  ))

  return {
    paths,
    fallback: false
  }
}
