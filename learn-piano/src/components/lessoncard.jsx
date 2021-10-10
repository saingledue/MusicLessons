import React, { Component } from "react";
import './styles/lessoncard.css';
import Button from '@mui/material/Button';
//https://mui.com/api/button/
class LessonCard extends Component {
    render() {
        return (
            <React.Fragment >
                <body className="lessoncard">
                    <h1 >
                        Hello
                    </h1>
                    <Button variant="contained" className="button">Press me!</Button>
                </body>
            </React.Fragment>
        );
    }
}

export default LessonCard;