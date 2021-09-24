import React from "react";
import { Container } from "react-bootstrap";

import StreamEmbed from "components/twitch/StreamEmbed";
import Events from "components/event/Events";
import ScheduleAlert from "components/event/ScheduleAlert";
import AccordianWrapper from "components/accordian/AccordianWrapper";

import { getSchedule } from "apis";

import "pages/schedule/Schedule.css";

function pad(n) {
  if (n <= 9) {
    return "0" + n;
  }
  return n;
}

class Schedule extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      scheduleDates: [],
      isLatestSchedule: true,
      selectedVideoID: "",
    };
  }

  async componentDidMount() {
    let ret = await getSchedule();
    if (ret.error != null) {
      console.error(ret.error);
    } else {
      const { dates, is_latest_schedule } = ret.resp;

      let scheduleDates = [];
      for (const dateSchedule of dates) {
        for (const e of dateSchedule.events) {
          const d = new Date(e.start_time);

          const date =
            d.getFullYear() +
            "-" +
            pad(d.getMonth() + 1) +
            "-" +
            pad(d.getDate());
          if (
            scheduleDates.length === 0 ||
            scheduleDates[scheduleDates.length - 1].date !== date
          ) {
            scheduleDates.push({ date: date, events: [] });
          }

          scheduleDates[scheduleDates.length - 1].events.push(e);
        }
      }

      this.setState({
        scheduleDates: scheduleDates,
        isLatestSchedule: Boolean(is_latest_schedule),
      });
    }
  }

  handleVideoClick = (e, video_id) => {
    e.preventDefault();

    this.setState({
      selectedVideoID: video_id,
    });
  };

  render() {
    const { selectedVideoID, scheduleDates, isLatestSchedule } = this.state;

    return (
      <React.Fragment>
        {selectedVideoID !== "" && (
          <StreamEmbed videoID={selectedVideoID} id={"selected-video"} />
        )}

        <Container className="schedule-page">
          <h3>Schedule</h3>

          {Array.isArray(scheduleDates) && scheduleDates.length > 0 ? (
            <React.Fragment>
              <ScheduleAlert isLatestSchedule={isLatestSchedule} />

              {scheduleDates.map((d) => (
                <AccordianWrapper key={d.date} title={d.date}>
                  <Events
                    events={d.events}
                    onVideoClick={this.handleVideoClick}
                  />
                </AccordianWrapper>
              ))}
            </React.Fragment>
          ) : (
            <h5>Schedule is not available</h5>
          )}
        </Container>
      </React.Fragment>
    );
  }
}

export default Schedule;