import React, { createRef, Component } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Loader } from "../components/Loader"

class FilmTemplate extends Component {
  constructor(props) {
    super(props)
    const post = this.props.data.ghostPost
    const filmRegex = new RegExp("<iframe.*?</iframe>", "g")
    const textRegex = new RegExp("<p>.*?</p>", "g")
    const films = post.html
      .match(filmRegex)
      .map(
        (html, index) =>
          html.substring(0, 7) + ` id=film-${index}` + html.substring(7)
      )
    const texts = post.html.match(textRegex)
    this.state = {
      post,
      things: films.map((film, i) => ({
        film,
        text: texts[i],
        id: "" + i,
      })),
      activeThing: { id: null, ratio: 0 },
      loading: films.reduce((acc, _, i) => {
        return { ...acc, [`film-${i}`]: true }
      }, {}),
    }

    this.rootRef = React.createRef()

    this.singleRefs = this.state.things.reduce((acc, value) => {
      acc[value.id] = {
        ref: createRef(),
        id: value.id,
        ratio: 0,
      }

      return acc
    }, {})

    const callback = entries => {
      entries.forEach(
        entry =>
          (this.singleRefs[entry.target.id].ratio = entry.intersectionRatio)
      )

      const activeThing = Object.values(this.singleRefs).reduce(
        (acc, value) => (value.ratio > acc.ratio ? value : acc),
        this.state.activeThing
      )

      if (activeThing.ratio > this.state.activeThing.ratio) {
        this.setState({ activeThing })
      }
    }
    if (typeof window !== `undefined`) {
      this.observer = new IntersectionObserver(callback, {
        root: this.rootRef.current,
        threshold: new Array(101).fill(0).map((v, i) => i * 0.01),
      })
    }
  }

  componentDidMount() {
    if (typeof window !== `undefined`) {
      Object.values(this.singleRefs).forEach(value =>
        this.observer.observe(value.ref.current)
      )
      Object.keys(this.state.loading).forEach(id => {
        document.getElementById(id).onload = () => {
          this.setState({ loading: { [id]: false } })
        }
      })
    }
  }

  render() {
    return (
      <Layout color="#1f2839" sub={"films"}>
        <div className="film-numbers">
          {this.state.things.map(({ id }) => (
            <div key={id}>
              <a
                href={`#${id === "0" ? "title" : id}`}
                style={{
                  color: id === this.state.activeThing.id ? "grey" : "inherit",
                }}
              >
                {parseInt(id) + 1}
              </a>
            </div>
          ))}
        </div>
        <div className="scrollable-container film-container" ref={this.rootRef}>
          <h1 id="title">{this.props.data.ghostPost.title}</h1>
          {this.state.things.map(({ film, text, id }) => (
            <div
              ref={this.singleRefs[id].ref}
              id={id}
              key={id}
              className="single-film-container"
            >
              <Loader loading={this.state.loading[`film-${id}`]} color="grey" />
              <div
                className="iframe-container"
                style={{
                  display: this.state.loading[`film-${id}`] ? "none" : "inline",
                }}
                dangerouslySetInnerHTML={{ __html: film }}
              />
              <div
                className="text-container"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
          ))}
        </div>
      </Layout>
    )
  }
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
