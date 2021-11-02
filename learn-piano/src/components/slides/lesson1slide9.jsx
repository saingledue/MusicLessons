
import React, { Component } from "react";
import slide9 from '../images/slideshow-slides/Lesson1Slide9.png'
import styles from '../styles/slide.module.css';
class lesson1slide9 extends Component {
    render() {
      return (
        <React.Fragment>
            <img className={styles.image} src={slide9}/>
        </React.Fragment>
      );
    }
  }
  export default lesson1slide9;