import React, { Component } from "react";
import NavBar from "./navbar";
import styles from './styles/Exercise.module.css';
import Button from '@mui/material/Button';
class Exercise extends Component {
    render() {
      return (
        <React.Fragment>
        <div className="App">
            <NavBar></NavBar>
            <div className={styles.contentContainer}>
            </div>
        </div>
        </React.Fragment>
      );
    }
  }
  export default Exercise;