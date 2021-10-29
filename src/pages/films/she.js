import React from "react"
import Layout from "../../components/layout"

const embed_url = "https://www.youtube.com/embed/"

const Iframe = ({ title, src }) => {
  return (
    <figure class="kg-card kg-embed-card iframe-container" id={title}>
      <iframe
        title={title}
        src={src}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media;
      gyroscope; picture-in-picture"
        allowfullscreen=""
        className="single-film-container"
      />
    </figure>
  )
}
const She = () => {
  return (
    <Layout color="white" site="films">
      <div className="scrollable-container film-container">
        <div className="content-block">
          <h2>intro</h2>
          <p>
            On a cold evening in March, a young girl starts traveling. She has
            nothing more than a camera and a few notebooks in her backpack. An
            airplane ticket to Kathmandu, Nepal, in her hands. Five months of
            time lying in front of her.
          </p>
          <p>
            This is a short film series for everyone who fears to step out. A
            few jars full of courage. And a perspective on the world through the
            eyes of a 19-year-old girl.
          </p>
          <Iframe title="intro" src={`${embed_url}ya1dqwOr_Zg`} />
        </div>
        <div className="content-block">
          <h2>arlanda </h2>
          <p>
            Somewhere in the middle of a Swedish airport a girl is lost. This is
            the first stopover - really not the place, nor the time to question
            a journey. But an unknown language roars from the speakers.
            Strangers jostle her. She never felt that small before.
          </p>
          <p>
            Snow is falling outside of the window and she takes a deep breath.
            Sometimes there are moments in life, when you feel small. Sometimes
            there are moments in life, when you can't do more than taking a deep
            breath. Sometimes there are moments in life, when you know that
            everything will be fine.
          </p>
          <Iframe title="arlanda" src={`${embed_url}NsILmbXWlz8`} />
        </div>
        <div className="content-block">
          <h2>kathmandu</h2>
          <p>
            She was in chaos. There were people around her. The burning sun on
            her head. And dust in her lungs. It's unsure what happens in your
            brain in moments like these. You're not able to handle the
            situation.
          </p>
          <p>
            You just see and feel and smell. Instead of reacting, you remember.
            As if those first days in a new country crystallize immediately.
          </p>
          <Iframe title="kathmandu" src={`${embed_url}e-R8ZvN0QlY`} />
        </div>
        <div className="content-block">
          <h2>the bus</h2>
          <p>
            The moment she leaves the dusty, crowded city of Kathmandu, she can
            breathe again. A country is bigger than just its capital city. And
            when you sit in a bus and new people enter at every station, you get
            to see the faces of Nepal - a mother, a young school girl, a man
            dressed all in white.
          </p>
          <p>Leave the town, go on a ride and open your eyes.</p>
          <Iframe title="the bus" src={`${embed_url}-8vOWdavqms`} />
        </div>
        <div className="content-block">
          <h2>monks</h2>
          <p>
            In uniform hours the days with the monks pass by. In a small
            Buddhist monastery at the edge of a national park, she found a home
            for a week. Ran to the waterfall. Told German fairytales. And closed
            her eyes to the regular gongs of the singing bowls.
          </p>
          <Iframe title="monks" src={`${embed_url}qAX8E6_Z7Fc`} />
        </div>
        <div className="content-block">
          <h2>walking</h2>
          <p>
            Two girls were standing with a monk in the middle of the orange
            monastery "But can't we just hike alone through the national park?"
            Palden knit his brows "Of course... you can do whatever you want to.
            But you're girls and you're alone and who carries your backpacks?"
            "We will.""
          </p>
          <p>There is no better example for the naivety of 19-years-olds.</p>
          <Iframe title="walking" src={`${embed_url}scY-wmuOgg`} />
        </div>
        <div className="content-block">
          <h2>anapurna</h2>
          <p>
            Her cardiovascular system was made up by her heart and circulatory
            system. With her heart working as a pump, pushing blood to her
            organs, tissues and cells. Her blood delivered the oxygen. When
            rethinking this part of the journey it is always this biochemical
            process that comes to her mind. It must have functioned like this
            for years already. But it was here in Nepal, that she first felt it.
          </p>
          <p>Felt how oxygen was flooding her cells.</p>
          <p>Felt what it was like to have a body.</p>
          <p>Felt what it was like to be alive.</p>
          <Iframe title="anapurna" src={`${embed_url}5LEaE2zUdQs`} />
        </div>
        <div className="content-block">
          <h2>calmness</h2>
          <p>
            This is a story for you soon-to-be-travelers out there. For all the
            runners out there. This is a secret I want to share.
          </p>
          <Iframe title="calmness" src={`${embed_url}e7GvJS1mdGE`} />
        </div>
        <div className="content-block">
          <h2>sweetness</h2>
          <p>
            In one of the dusty streets of Nargakot, hidden behind wooden walls
            and corrugated sheets, there is a dark room. They arrive early in
            the morning. A long bus ride has taken its toll on their bones.
            Still tired and exhausted from the heat, they order a cup of chai
            milk tea. Not even looking up, when suddenly the room changes. I
            guess, miracles happen at times and places you would never expect
            them.
          </p>
          <Iframe title="sweetness" src={`${embed_url}ffOdlz3SoDA`} />
        </div>
        <div className="content-block">
          <h2>humboldt</h2>
          <p>
            This life was too close to a dream she never dared to speak of out
            loud. She wanted to walk through a jungle. Adventures like these
            were out of books. But here she was, standing in the middle of a
            chirping green.
          </p>
          <Iframe title="humboldt" src={`${embed_url}vPp6lrWekhM`} />
        </div>
        <div className="content-block">
          <h2>amit</h2>
          <p>
            People you meet on your journey are like books. Some of them will
            open the pages and read out their story. I feel like this is one of
            the most beautiful gifts a stranger can give to you. This film isn't
            a story of the young girl herself. This is one of Amit's and she
            just listened to it, with glowing ears.
          </p>

          <Iframe title="amit" src={`${embed_url}Y8d2xXIwScg`} />
        </div>
        <div className="content-block">
          <h2>end</h2>
          <p>
            "Once upon a time there was a slender young girl standing for a
            minute alone in a big airport building in Kathmandu, Nepal. The last
            six weeks she had spent travelling through Nepal with a group of
            friends."
          </p>
          <p>
            The girl put down her pencil. She had just written the last sentence
            in her Nepal diary, her great book of fairytales. In front of her
            jars were lining up. All open. With colors floating inside them. Her
            brush had turned those colors into words. She was proud.
          </p>
          <Iframe title="end" src={`${embed_url}GvjCbHBE_Rg`} />
        </div>
      </div>
    </Layout>
  )
}

export default She
