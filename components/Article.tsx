import Typography from '@mui/material/Typography'
import React from 'react'
import MarkdownIt from 'markdown-it'
import { Article as ArticleType } from '../types/Article'

export default function Article (article: ArticleType) {
  const md = new MarkdownIt()
  const htmlContent = md.render(article.attributes.content)

  return (
    <>
      <Typography variant="h3" component="div" gutterBottom>
        {article.attributes.title}
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
        {article.attributes.introduction}
      </Typography>

      <Typography dangerouslySetInnerHTML={{ __html: htmlContent }} variant="body1" gutterBottom component="div" />

      <Typography variant="caption" display="block" gutterBottom>
        Published {new Date(article.attributes.publishedAt).toLocaleString()}
      </Typography>
    </>
  )
}
