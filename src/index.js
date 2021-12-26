//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date();
let timeOfDay = currentDate.getHours();

let greetings = "Good morning";

const headingStyle = {
  color: "red"
};

if (timeOfDay >= 12 && timeOfDay < 18) {
  greetings = "Good afternoon";
  headingStyle.color = "green";
} else {
  if (timeOfDay >= 18) {
    greetings = "Good evening";
    headingStyle.color = "blue";
  }
}

ReactDOM.render(
  <h1 className="heading" style={headingStyle}>
    {greetings}
  </h1>,
  document.querySelector("#root")
);
