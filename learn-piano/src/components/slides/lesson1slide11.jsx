
import React, { Component } from "react";
import slide11 from '../images/slideshow-slides/Lesson1Slide11.png'
import styles from '../styles/slide.module.css';
class lesson1slide11 extends Component {
    render() {
      return (
        <React.Fragment>
            <img className={styles.image} src={slide11}/>
        </React.Fragment>
      );
    }
  }
  export default lesson1slide11;