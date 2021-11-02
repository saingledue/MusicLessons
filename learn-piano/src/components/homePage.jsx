import NavBar from "./navbar";
import LessonCard from "./lessoncard";
import React, { Component } from "react";

class HomePage extends React.Component {
    render() {
      return (
<div className="App">
      <NavBar></NavBar>
      <LessonCard lessonName='Basic Note Identification' description="Learn about the basic positions of notes on the keyboard"></LessonCard>
      <LessonCard lessonName='Rests' description="Learn about Rest Duration"></LessonCard>
      <LessonCard lessonName='Major Chords' description="Learn about the major chords"></LessonCard>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    );
}
}
export default HomePage;