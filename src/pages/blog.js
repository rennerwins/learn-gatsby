import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const { title, date } = node.frontmatter
          return (
            <li key={title}>
              <h2>{title}</h2>
              <p>{date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`

export default BlogPage
