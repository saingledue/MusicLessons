import React, { Component } from "react";
import NavBar from "./navbar";
import styles from './styles/Exercise.module.css';
import Button from '@mui/material/Button';
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
                  <div class={styles.noteArea}></div>
                  <div class={styles.questionArea}></div>
                  <div class={styles.pianoArea}></div>
              </div>
              <div></div>
            </div>
        </div>
        </React.Fragment>
      );
    }
  }
  export default Exercise;