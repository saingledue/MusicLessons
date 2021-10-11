
import React, { Component } from "react";
import NavBar from "./navbar";
import sampleLessonPicture from './images/clefsLesson.png'
import styles from './styles/slideShowViewer.module.css';
import Button from '@mui/material/Button';
class SlideShowViewer extends Component {
    render() {
      return (
        <React.Fragment>
            <div className={styles.container}>
                <div>
                    <img className={styles.image} src={sampleLessonPicture} />
                </div>
                <div>
                    <h1>Clefts assign individual notes to certain lines or spaces</h1>
                    <h1>Two clefs are normally used: The Treble and Bass clefs</h1>
                </div>
            </div>
            <div className={styles.buttonHolder}>
              <div></div>
              <div>
              <Button variant="contained">Previous</Button>
              </div>
              <div>
              <Button variant="contained">Next</Button>
              </div>
              <div></div>
            </div>
        </React.Fragment>
      );
    }
  }
  export default SlideShowViewer;