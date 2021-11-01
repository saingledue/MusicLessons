import { useHistory } from 'react-router-dom';
import React, { Component } from "react";
import HomePage from "./homePage";
import SlideShow from "./SlideShow";
import Exercise from "./Exercise";
import Quiz from './quiz';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
  
class WebsiteRouter extends Component {
    render() {
      return (
        <React.Fragment>
            <Router>
        <Switch>
        <Route exact path="/">
            <HomePage />
        </Route>
        <Route path="/slideShow">
            <SlideShow/>
        </Route>
        <Route path="/Exercise">
            <Exercise/>
        </Route>
        <Route path="/quiz">
            <Quiz/>
        </Route>
            </Switch>
        </Router>
        </React.Fragment>
      );
    }
  }
  export default WebsiteRouter;