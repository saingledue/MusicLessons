
import React, { Component } from "react";
import question2img from '../images/question-imgs/question2.png'
import styles from '../styles/question.module.css';
class question2 extends Component {
    render() {
      return (
        <React.Fragment>
            <h1>What is this Piano Note?</h1>
            <img className={styles.image} src={question2img}/>
            <br/>
        </React.Fragment>
      );
    }
  }
  export default question2;