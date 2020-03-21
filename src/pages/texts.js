import React from "react"
import Layout from "../components/layout"

const Texts = () => {
  return (
    <Layout color="#013f31">
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          width: "80vw",
          fontFamily: "Helvetica Neue",
        }}
      >
        <h2 style={{ margin: "10px" }}>1 2 3</h2>
        <h2 style={{ fontWeight: 100 }}>ZEIT - Oma</h2>
        <p style={{ textAlign: "center", fontSize: "15px" }}>
          Oma, wie schön, dass du rangehst.
          <br />
          Ich hatte es schon so oft versucht, so viele Male die letzten Wochen,
          und obwohl sie zu Hause war, hatte sie nur neben dem Telefon gesessen
          während ich energisch klingelte.
          <br />
          Ja
          <br />
          Oma wie geht es dir?
          <br />
          War diese Frage falsch? Zu forsch?
          <br />
          Nicht gut, Swantje.
          <br />
          Nicht gut.
          <br />
          Oma darf ich dir kurz erzählen, wie ich mir deine Krankheit vorstelle?
          <br />
          Ich warte gar nicht erst auf eine Reaktion.
          <br />
          Möchte ihr schon so lang von dem Gedanken erzählen.
          <br />
          Oma, Michael Ende, in seinem Buch Momo, schreibt über Zeit. Und wie
          sie in eines
        </p>
      </div>
    </Layout>
  )
}

export default Texts
