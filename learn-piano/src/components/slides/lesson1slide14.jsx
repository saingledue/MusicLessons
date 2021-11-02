
import React, { Component } from "react";
import slide14 from '../images/slideshow-slides/Lesson1Slide14.png'
import styles from '../styles/slide.module.css';
class lesson1slide14 extends Component {
    render() {
      return (
        <React.Fragment>
            <img className={styles.image} src={slide14}/>
        </React.Fragment>
      );
    }
  }
  export default lesson1slide14;