import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const TextTemplate = ({ data }) => {
  const post = data.ghostPost
  return (
    <Layout color="#013F31" sub={"texts"}>
      <div className="scrollable-container">
        <h1>{post.title}</h1>
        <div
          className="text-post-container"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export default TextTemplate

export const filmsQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      title
      html
    }
  }
`
