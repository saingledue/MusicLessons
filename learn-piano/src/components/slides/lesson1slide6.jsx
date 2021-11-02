
import React, { Component } from "react";
import slide6 from '../images/slideshow-slides/Lesson1Slide6.png'
import styles from '../styles/slide.module.css';
class lesson1slide6 extends Component {
    render() {
      return (
        <React.Fragment>
            <img className={styles.image} src={slide6}/>
        </React.Fragment>
      );
    }
  }
  export default lesson1slide6;