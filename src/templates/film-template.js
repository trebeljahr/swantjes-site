import React, { useEffect, useRef } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const FilmTemplate = ({ data }) => {
  const rootRef = useRef(null)
  const post = data.ghostPost
  const parser = new DOMParser()
  const firstParse = parser.parseFromString(post.html, "text/html")
  const body = firstParse.getElementsByTagName("body")
  const filmsCardHTML = firstParse.getElementsByTagName("figure")
  const filmsHTML = firstParse.getElementsByTagName("iframe")

  let films = []
  for (let i = 0; i < filmsHTML.length; i++) {
    filmsHTML[i].classList.add("single-film-container")
    filmsCardHTML[i].setAttribute("id", `film-${i}`)
    filmsHTML[i].removeAttribute("width")
    filmsHTML[i].removeAttribute("height")
    filmsCardHTML[i].classList.add("iframe-container")
    films = [...films, filmsHTML[i]]
  }
  useEffect(() => {
    let rawElements = body[0].children
    let elements = []

    for (let i = 0; i < rawElements.length; i++) {
      elements.push(rawElements[i])
    }
    elements.forEach(elem => {
      console.log(elem)
      rootRef.current.appendChild(elem)
    })
  }, [body])

  return (
    <Layout color="#1f2839" sub={"films"}>
      {/* <div className="film-numbers">
        {films.map((_, index) => (
          <a href={`#film-${index}`}>{index + 1}</a>
        ))}
      </div> */}
      <div className="scrollable-container film-container" ref={rootRef} />
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
