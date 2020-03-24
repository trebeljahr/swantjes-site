import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const FilmTemplate = ({ data }) => {
  const post = data.ghostPost
  const filmRegex = new RegExp("<iframe.*?</iframe>", "g")
  const textRegex = new RegExp("<p>.*?</p>", "g")

  const films = post.html.match(filmRegex)
  const texts = post.html.match(textRegex)

  var posts = films.map((film, i) => ({ film, text: texts[i] }))
  return (
    <Layout color="#1f2839" sub={"films"}>
      <div className="container film-container">
        <h1>{post.title}</h1>
        {posts.map(post => (
          <div className="single-film-container">
            <div
              className="iframe-container"
              dangerouslySetInnerHTML={{ __html: post.film }}
            />
            <div
              className="text-container"
              dangerouslySetInnerHTML={{ __html: post.text }}
            />
          </div>
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
