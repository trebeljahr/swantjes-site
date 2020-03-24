import React, { createRef, Component } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

class FilmTemplate extends Component {
  constructor(props) {
    super(props)
    const post = this.props.data.ghostPost
    const filmRegex = new RegExp("<iframe.*?</iframe>", "g")
    const textRegex = new RegExp("<p>.*?</p>", "g")
    const films = post.html.match(filmRegex)
    const texts = post.html.match(textRegex)
    this.state = {
      post,
      things: films.map((film, i) => ({
        film,
        text: texts[i],
        id: "" + i,
      })),
      activeThing: { id: null, ratio: 0 },
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
    }
  }

  render() {
    return (
      <Layout color="#1f2839" sub={"films"}>
        <div className="film-numbers">
          {this.state.things.map(thing => (
            <div key={thing.id}>
              <a
                href={`#${thing.id}`}
                style={{
                  color:
                    thing.id === this.state.activeThing.id ? "grey" : "inherit",
                }}
              >
                {parseInt(thing.id) + 1}
              </a>
            </div>
          ))}
        </div>
        <div className="scrollable-container film-container" ref={this.rootRef}>
          <h1 style={{ marginTop: 0 }}>{this.props.data.ghostPost.title}</h1>
          {this.state.things.map(({ film, text, id }) => (
            <div
              ref={this.singleRefs[id].ref}
              id={id}
              className="single-film-container"
            >
              <div
                className="iframe-container"
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
