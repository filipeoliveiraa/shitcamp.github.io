import React from "react";
import { Container } from "react-bootstrap";

import "pages/about/AboutPage.css";
import peepoGiggles from "assets/peepoGiggles.gif";

function AboutPage() {
  return (
    <Container className="about-page">
      <h3>About</h3>
      <p>
        <i>Shitcamp</i> is the fall installment of the Shit stream collabs- the
        summer <i>Shitcon</i> has already occurred, and the winter{" "}
        <i>Shitsummit</i>(?) is expected next - involving the biggest streamers
        on Twitch such as xQc, HasanAbi, Ludwig and many more. <i>Shitcamp</i>{" "}
        will be held in Los Angeles from 26-29 September 2021, and is organized
        by popular streamer, QTCinderella.
      </p>
      <p>
        16 creators staying in a house together and live streaming "organized"
        events- what could go wrong?
        <img
          src={peepoGiggles}
          alt="peepoGiggles"
          className="peepo-giggles-gif"
        />
      </p>

      <div className="trailer-video">
        <div className="trailer-video-embed">
          <iframe
            src="https://www.youtube.com/embed/hNc6wDyovMY"
            title="Shitcamp trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>

      {/* TODO: */}
      {/* <h3>Streamers</h3> */}
    </Container>
  );
}

export default AboutPage;
