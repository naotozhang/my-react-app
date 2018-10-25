import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to React</h1>
        <p>Complete course about the best tools and design systems. Prototype and build apps with React and Swift</p>
        <Link to="/page-2/">GOGOGO</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
