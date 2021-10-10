import React, { Component } from "react";
import './styles/lessoncard.css';
import Button from '@mui/material/Button';

class LessonCard extends Component {
    render() {
        return (
            <React.Fragment >
                <body className="lessoncard">
                    <h1 >
                        Hello
                    </h1>
                    <Button>Press me!</Button>
                </body>
            </React.Fragment>
        );
    }
}

export default LessonCard;