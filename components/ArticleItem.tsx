import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from '@mui/material'
import { Article } from '../types/Article'

export default function ArticleItem (article: Article) {
  const niceDate = new Date(article.attributes.publishedAt).toLocaleString('en-GB', { timeZone: 'GMT' })

  return (
    <>
      <Card sx={{ margin: '0 0 20px 0' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {niceDate}
          </Typography>

          <Link href={`/articles/${encodeURIComponent(article.id)}`} underline="hover">
            <Typography variant="h5" component="div" gutterBottom>
              {article.attributes.title}
            </Typography>
          </Link>

          <Typography variant="body2">
           {article.attributes.introduction}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={`/articles/${encodeURIComponent(article.id)}`}>Learn More</Button>
        </CardActions>
      </Card>
    </>
  )
}
