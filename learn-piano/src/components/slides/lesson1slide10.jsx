
import React, { Component } from "react";
import slide10 from '../images/slideshow-slides/Lesson1Slide10.png'
import styles from '../styles/slide.module.css';
class lesson1slide10 extends Component {
    render() {
      return (
        <React.Fragment>
            <img className={styles.image} src={slide10}/>
        </React.Fragment>
      );
    }
  }
  export default lesson1slide10;