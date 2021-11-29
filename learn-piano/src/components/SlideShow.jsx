import React, { Component } from "react";
import NavBar from "./navbar";
import SlideShowViewer from "./slideViewer";
import styles from './styles/slideShow.module.css';
import Button from '@mui/material/Button';
class SlideShow extends Component {
    render() {
      return (
        <React.Fragment>
        <div className="App">
            <NavBar></NavBar>
            <div className={styles.contentContainer}>
              <div>
              <Button variant="contained" onClick={()=>{window.location.href='/'}}>Go Home</Button>
              </div>
              <div>
              <Button variant="contained">Watch as Video</Button>
              <h1>Basic Note Identification: Lesson</h1>
                <div className={styles.viewerBox}>
                <SlideShowViewer></SlideShowViewer>
                </div>
              </div>
              <div>
                <Button variant="contained" onClick={()=>{window.location.href='/Exercise'}}>Go To Exercise</Button>
              </div>
            </div>
        </div>
        </React.Fragment>
      );
    }
  }
  export default SlideShow;