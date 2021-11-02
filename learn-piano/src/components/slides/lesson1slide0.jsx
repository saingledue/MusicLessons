import React, { Component } from "react";
import slide1 from '../images/slideshow-slides/Lesson1Slide1.png'
import styles from '../styles/slide.module.css';
class lesson1slide1 extends Component {
    render() {
      return (
        <React.Fragment>
            <video class="tab" controls>Your browser does not support the &lt;video&gt; tag.
                <source src="/jargon/m/computer-hope.mp4"/>
            </video>
        </React.Fragment>
      );
    }
  }
  export default lesson1slide1;




