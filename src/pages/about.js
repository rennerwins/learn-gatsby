import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>I was born on October 17th, 1990</p>
      <p>
        Link to <Link to="/contact">Contact</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
