
import React, { Component } from "react";
import slide5 from '../images/slideshow-slides/Lesson1Slide5.png'
import styles from '../styles/slide.module.css';
class lesson1slide5 extends Component {
    render() {
      return (
        <React.Fragment>
            <img className={styles.image} src={slide5}/>
        </React.Fragment>
      );
    }
  }
  export default lesson1slide5;