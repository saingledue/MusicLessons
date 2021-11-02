
import React, { Component } from "react";
import slide3 from '../images/slideshow-slides/Lesson1Slide3.png'
import styles from '../styles/slide.module.css';
class lesson1slide3 extends Component {
    render() {
      return (
        <React.Fragment>
            <img className={styles.image} src={slide3}/>
        </React.Fragment>
      );
    }
  }
  export default lesson1slide3;