import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const FilmTemplate = ({ data }) => {
  const post = data.ghostPost
  return (
    <Layout color="#013F31" filmMenu={true}>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
        }}
      >
        <>
          <h1>{post.title}</h1>
          <section
            style={{ width: "80%" }}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </>
      </div>
    </Layout>
  )
}

export default FilmTemplate

export const filmsQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      title
      html
    }
  }
`
