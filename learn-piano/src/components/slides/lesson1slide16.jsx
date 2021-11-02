
import React, { Component } from "react";
import slide16 from '../images/slideshow-slides/Lesson1Slide16.png'
import styles from '../styles/slide.module.css';
class lesson1slide16 extends Component {
    render() {
      return (
        <React.Fragment>
            <img className={styles.image} src={slide16}/>
        </React.Fragment>
      );
    }
  }
  export default lesson1slide16;