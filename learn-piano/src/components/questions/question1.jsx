
import React, { Component } from "react";
import question1img from '../images/question-imgs/question1.png'
import styles from '../styles/question.module.css';
class question1 extends Component {
    render() {
      return (
        <React.Fragment>
            <h1>What is this Piano Note?</h1>
            <img className={styles.image} src={question1img}/>
            <br/>
        </React.Fragment>
      );
    }
  }
  export default question1;