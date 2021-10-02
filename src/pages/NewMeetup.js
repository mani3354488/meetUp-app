import React from "react";
import { useHistory } from "react-router-dom";
import NewMeetupform from "../components/meetups/NewMeetupform";

function NewMeetups() {
  const history = useHistory();

  function addMeetUpHandler(meetupData) {
    fetch("https://meetup-2a8b2-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add NewMeetup</h1>
      <NewMeetupform onAddMeetup={addMeetUpHandler} />
    </section>
  );
}

export default NewMeetups;
