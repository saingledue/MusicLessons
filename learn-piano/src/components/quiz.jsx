import React, { Component } from "react";
import NavBar from "./navbar";
import styles from './styles/Exercise.module.css';
import Button from '@mui/material/Button';
class Quiz extends Component {
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
              <Button variant="contained" onClick={()=>{window.location.href='/Exercise'}}>Go to Exercise</Button>
              </div>
              <div>
                <Button variant="contained" onClick={()=>{window.location.href='/'}}>Go To Next Lesson</Button>
              </div>
            </div>
            <div class={styles.contentBody}>
              <div></div>
              <div class={styles.contentArea}>
              </div>
              <div></div>
            </div>
        </div>
        </React.Fragment>
      );
    }
  }
  export default Quiz;