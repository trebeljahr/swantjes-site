import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const FilmTemplate = ({ data }) => {
  const post = data.ghostPost
  const filmRegex = new RegExp("<iframe.*?</iframe>", "g")
  const textRegex = new RegExp("<p>.*?</p>", "g")

  const films = post.html.match(filmRegex)
  const texts = post.html.match(textRegex)

  console.log(post.html)
  console.log(films)
  console.log(texts)

  var posts = films.map((film, i) => ({ film, text: texts[i] }))
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
          gridColumn: 2,
        }}
      >
        <h1>{post.title}</h1>
        {posts.map(post => (
          <>
            <div
              className="iframe-container"
              dangerouslySetInnerHTML={{ __html: post.film }}
            />
            <div dangerouslySetInnerHTML={{ __html: post.text }} />
          </>
        ))}
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
