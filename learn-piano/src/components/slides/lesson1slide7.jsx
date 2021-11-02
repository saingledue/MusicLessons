
import React, { Component } from "react";
import slide7 from '../images/slideshow-slides/Lesson1Slide7.png'
import styles from '../styles/slide.module.css';
class lesson1slide7 extends Component {
    render() {
      return (
        <React.Fragment>
            <img className={styles.image} src={slide7}/>
        </React.Fragment>
      );
    }
  }
  export default lesson1slide7;