
import React, { Component } from "react";
import slide8 from '../images/slideshow-slides/Lesson1Slide8.png'
import styles from '../styles/slide.module.css';
class lesson1slide8 extends Component {
    render() {
      return (
        <React.Fragment>
            <img className={styles.image} src={slide8}/>
        </React.Fragment>
      );
    }
  }
  export default lesson1slide8;