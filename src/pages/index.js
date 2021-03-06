import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h2>Welcome to my website</h2>
    <p>This is a sample site for the Gatsby crash course</p>
    
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem'}}>
      <Image />
    </div>
   
  </Layout>
)

export default IndexPage
