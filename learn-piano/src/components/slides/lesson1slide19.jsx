
import React, { Component } from "react";
import slide19 from '../images/slideshow-slides/Lesson1Slide19.png'
import styles from '../styles/slide.module.css';
class lesson1slide19 extends Component {
    render() {
      return (
        <React.Fragment>
            <img className={styles.image} src={slide19}/>
        </React.Fragment>
      );
    }
  }
  export default lesson1slide19;