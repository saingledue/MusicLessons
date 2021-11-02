
import React, { Component } from "react";
import slide15 from '../images/slideshow-slides/Lesson1Slide15.png'
import styles from '../styles/slide.module.css';
class lesson1slide15 extends Component {
    render() {
      return (
        <React.Fragment>
            <img className={styles.image} src={slide15}/>
        </React.Fragment>
      );
    }
  }
  export default lesson1slide15;