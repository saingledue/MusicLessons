
import React, { Component } from "react";
import slide2 from '../images/slideshow-slides/Lesson1Slide2.png'
import styles from '../styles/slide.module.css';
class lesson1slide2 extends Component {
    render() {
      return (
        <React.Fragment>
            <img className={styles.image} src={slide2}/>
        </React.Fragment>
      );
    }
  }
  export default lesson1slide2;