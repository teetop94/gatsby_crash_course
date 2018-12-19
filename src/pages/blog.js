import React from 'react'
import Link from "gatsby-link";


const BlogPost = ({data}) => (
    <div>
      <Link to="/">Home Page</Link>
      <br />
      <br />
      
      <h1>Welcome to Teetop Codes</h1>
      <p>This is a space where we will learn everything and how to be a Full Stack Developer</p>
      {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>Posted by { post.node.frontmatter.author } on {post.node.frontmatter.date}</small>
            <br />
            <br />
            <Link to={post.node.frontmatter.path}>Read More</Link>
            <br />
            <br />
            <hr />
          </div>
      ))}
    </div>
  )

  export const pageQuery = graphql`
  query BlogIndexQuery  {
        allMarkdownRemark{
          edges{
            node{
              id
              frontmatter{
                path
                title
                date
                author
              }
            }
          }
          
        }
  }
  `

  export default BlogPost;
