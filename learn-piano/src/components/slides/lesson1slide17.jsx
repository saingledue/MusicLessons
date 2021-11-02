
import React, { Component } from "react";
import slide17 from '../images/slideshow-slides/Lesson1Slide17.png'
import styles from '../styles/slide.module.css';
class lesson1slide17 extends Component {
    render() {
      return (
        <React.Fragment>
            <img className={styles.image} src={slide17}/>
        </React.Fragment>
      );
    }
  }
  export default lesson1slide17;