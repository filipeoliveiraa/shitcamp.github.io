import React from "react";
import { Container } from "react-bootstrap";

import "pages/about/AboutPage.css";
import peepoGiggles from "assets/peepoGiggles.gif";
import smile from "assets/smile.png";

function AboutPage(props) {
  const { userNames: featuredStreamers } = props;

  const specialGuests = [
    {
      userName: "PhinTTV",
      description: "will be the cameraman",
    },
    {
      userName: "ConnorEatsPants",
      description: "will feature in some events",
    },
  ];

  return (
    <Container className="about-page">
      <h3>About</h3>
      <p>
        <i>ShitCamp</i> is the fall installment of the <i>Shit</i> collaboration
        series involving the biggest streamers on Twitch such as xQc, HasanAbi,
        Ludwig and many more. <i>ShitCon</i> took place this summer, and{" "}
        <i>ShitSummit</i> (?) is expected to be the next one this winter.{" "}
        <i>ShitCamp</i> will be held in Los Angeles from 26-29 September 2021,
        and is organized by popular streamer, QTCinderella.
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

      <h5>So what exactly is Shitcamp?</h5>
      <p>
        It's basically a big get-together of a bunch of streamers, with
        different organized events that are streamed on different channels over
        the course of the week. There will be one main event per day, and a few
        side events that other streamers can optionally join. Apart from the
        scheduled events, streamers can also do their own thing and stream using
        the desktop setups and IRL backpacks available at the event.
      </p>

      <h5>When is Shitcamp?</h5>
      <p>
        Shitcamp is from 26-29 September 2021, and the streams will be during
        the PST timezone (UTC-7).
      </p>

      <h5>Who will be at Shitcamp?</h5>
      <p>This is the official list of the streamers attending Shitcamp:</p>
      <ul>
        {featuredStreamers.map((userName) => (
          <li key={userName}>
            <a
              href={`https://twitch.tv/${userName}`}
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {userName}
            </a>
          </li>
        ))}
      </ul>

      <p>Special guests include:</p>
      <ul>
        {specialGuests.map((g) => (
          <li key={g.userName}>
            <a
              href={`https://twitch.tv/${g.userName}`}
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {g.userName}
            </a>{" "}
            ({g.description})
          </li>
        ))}
      </ul>

      <h5>What are the teams for the events?</h5>
      <p>
        The 4 team captains have not been announced yet. You can vote for a
        streamer to be a team captain when you buy merch at the{" "}
        <a href="https://shitcamp.gg" target="_blank" rel="noreferrer">
          Official Shitcamp Merch Store
        </a>
        . Once Shitcamp starts, the team captains will pick their teams.
      </p>

      <h5>Who made this website?</h5>
      <p>
        me <img src={smile} alt="smile" className="smile" />
      </p>
    </Container>
  );
}

export default AboutPage;