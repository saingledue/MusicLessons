
import React, { Component } from "react";
import slide13 from '../images/slideshow-slides/Lesson1Slide13.png'
import styles from '../styles/slide.module.css';
class lesson1slide13 extends Component {
    render() {
      return (
        <React.Fragment>
            <img className={styles.image} src={slide13}/>
        </React.Fragment>
      );
    }
  }
  export default lesson1slide13;