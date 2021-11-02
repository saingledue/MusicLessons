import React, { Component } from "react";
import NavBar from "./navbar";
import styles from './styles/Exercise.module.css';
import Button from '@mui/material/Button';
import InteractivePiano from './InteractivePiano';
import sampleLessonPicture from './images/thumbnail_2021-11-01 22-52.jpg'

class Exercise extends Component {
    render() {
      return (
        <React.Fragment>
        <div className="App">
            <NavBar></NavBar>
            <div className={styles.buttonContainer}>
              <div>
              <Button variant="contained" onClick={()=>{window.location.href='/'}}>Go Home</Button>
              </div>
              <div>
              <Button variant="contained" onClick={()=>{window.location.href='/slideShow'}}>Go to Lesson</Button>
              </div>
              <div>
                <Button variant="contained" onClick={()=>{window.location.href='/quiz'}}>Go To Quiz</Button>
              </div>
            </div>
            <div class={styles.contentBody}>
              <div></div>
              <div class={styles.contentArea}>
                  <div class={styles.noteArea}>
                    <img className={styles.image} src={sampleLessonPicture} />
                  </div>
                  <div class={styles.title}>
                    Try to play some of the notes on the staff.
                  </div>
                  {/* <div class={styles.questionArea}></div> */}
                  <div class={styles.pianoArea}>
                  <p class={styles.pianoText}>___C#__D#____F#__G#__A#____C#__D#____F#__G#__A#__</p>
                    <InteractivePiano />
                    <p class={styles.pianoText}>C4__D___E__F___G___A___B__C5__D__E__F___G___A___B</p>
                    {/* startNote={'C4'}
                    endNote={'B5'} */}
                  </div>
              </div>
              <div></div>
            </div>
        </div>
        </React.Fragment>
      );
    }
  }
  export default Exercise;