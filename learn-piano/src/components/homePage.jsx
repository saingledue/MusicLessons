import NavBar from "./navbar";
import LessonCard from "./lessoncard";
import React, { Component } from "react";
class HomePage extends React.Component {
    render() {
      return (
<div className="App">
      <NavBar></NavBar>
      <LessonCard lessonName='Basics Part 1' description="This is the coolest 1st lesson ever"></LessonCard>
      <LessonCard lessonName='Basics Part 2' description="Ready for part 2? Lesss goooo"></LessonCard>
      <LessonCard lessonName='Basics Part 3' description="Are you a piano master? Keep it up!"></LessonCard>
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