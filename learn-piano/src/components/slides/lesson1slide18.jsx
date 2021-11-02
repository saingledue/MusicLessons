
import React, { Component } from "react";
import slide18 from '../images/slideshow-slides/Lesson1Slide18.png'
import styles from '../styles/slide.module.css';
class lesson1slide18 extends Component {
    render() {
      return (
        <React.Fragment>
            <img className={styles.image} src={slide18}/>
        </React.Fragment>
      );
    }
  }
  export default lesson1slide18;