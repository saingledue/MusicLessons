
import React, { Component } from "react";
import slide1 from '../images/slideshow-slides/Lesson1Slide1.png'
import styles from '../styles/question.module.css';
class lesson1slide1 extends Component {
    render() {
      return (
        <React.Fragment>
            <img className={styles.image} src={slide1}/>
        </React.Fragment>
      );
    }
  }
  export default lesson1slide1;