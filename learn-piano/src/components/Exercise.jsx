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
            <h1>Basic Note Identification: Exercise</h1>
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
                    <InteractivePiano />
                    <div class={styles.labelArea}>
                    <div><p class={styles.pianoText}> C4</p></div>
                    <div></div>
                    <div><p class={styles.pianoText}> C5</p></div>
                    <div></div>
                    </div>
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