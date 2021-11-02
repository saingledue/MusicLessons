
import React, { Component } from "react";
import slide12 from '../images/slideshow-slides/Lesson1Slide12.png'
import styles from '../styles/slide.module.css';
class lesson1slide12 extends Component {
    render() {
      return (
        <React.Fragment>
            <img className={styles.image} src={slide12}/>
        </React.Fragment>
      );
    }
  }
  export default lesson1slide12;