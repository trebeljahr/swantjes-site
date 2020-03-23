import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const FilmTemplate = ({ data }) => {
  const post = data.ghostPost
  const regexp = new RegExp("<iframe.*</iframe>")
  const [iframe] = post.html.match(regexp)
  return (
    <Layout color="#1f2839" filmMenu={true}>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          width: "100%",
        }}
      >
        <h1>{post.title}</h1>
        <div
          className="iframe-container"
          dangerouslySetInnerHTML={{ __html: iframe }}
        />
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
