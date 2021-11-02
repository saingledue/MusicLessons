
import React, { Component } from "react";
import slide4 from '../images/slideshow-slides/Lesson1Slide4.png'
import styles from '../styles/slide.module.css';
class lesson1slide4 extends Component {
    render() {
      return (
        <React.Fragment>
            <img className={styles.image} src={slide4}/>
        </React.Fragment>
      );
    }
  }
  export default lesson1slide4;