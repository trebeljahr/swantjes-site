import React, { useEffect, useRef, useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

const FilmTemplate = ({ data }) => {
  const rootRef = useRef(null)
  const [post] = useState(data.ghostPost)
  const [films, setFilms] = useState([])
  const [activeElem, setActiveElem] = useState("film-0")
  const callback = entries => {
    if (entries[0].isIntersecting) {
      setActiveElem(entries[0].target.id)
    }
  }

  useEffect(() => {
    if (window !== undefined) {
      const options = {
        root: rootRef.current,
        rootMargin: "0px",
        threshold: 1,
      }
      const observer = new IntersectionObserver(callback, options)
      const parser = new DOMParser()
      const firstParse = parser.parseFromString(post.html, "text/html")
      const body = firstParse.getElementsByTagName("body")
      const filmsCardHTML = firstParse.getElementsByTagName("figure")
      const filmsHTML = firstParse.getElementsByTagName("iframe")
      let filmsCards = []

      for (let i = 0; i < filmsCardHTML.length; i++) {
        filmsCardHTML[i].setAttribute("id", `film-${i}`)
        filmsCardHTML[i].classList.add("iframe-container")
        filmsCards = [...filmsCards, filmsCardHTML[i]]
        observer.observe(filmsCardHTML[i])
      }
      setFilms(filmsCards)
      for (let i = 0; i < filmsHTML.length; i++) {
        filmsHTML[i].classList.add("single-film-container")
        filmsHTML[i].removeAttribute("width")
        filmsHTML[i].removeAttribute("height")
      }

      let rawElements = body[0].children
      let elements = []

      for (let i = 0; i < rawElements.length; i++) {
        elements.push(rawElements[i])
      }
      elements.forEach(elem => {
        rootRef.current.appendChild(elem)
      })
      observer.observe(rootRef.current)
      filmsCards.forEach(card => {
        observer.observe(card)
      })
    }
  }, [post])

  const handleClick = id => {
    scrollTo(id)
  }
  return (
    <Layout color="#1f2839" sub={"films"}>
      <div className="film-numbers">
        {films.map((_, index) => (
          <button
            key={`film-button-${index}`}
            onClick={() => handleClick(`#film-${index}`)}
            style={{
              border:
                activeElem === `film-${index}` ? "1px white solid" : "none",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
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
