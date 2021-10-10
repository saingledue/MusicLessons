import React, { Component } from "react";
import './styles/lessoncard.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
//https://mui.com/api/button/
class LessonCard extends Component {
    render() {
        return (
            <React.Fragment >
                <body className="lessoncard">
                    <h1 >
                        Piano Basics
                    </h1>
                    <Stack direction="row" className="button" spacing={2}>
                        <Button variant="contained">Lesson</Button>
                        <Button variant="contained" disabled>Exercise</Button>
                        <Button variant="contained" href="#contained-buttons" disabled>Quiz</Button>
                    </Stack>
                </body>
            </React.Fragment>
        );
    }
}

export default LessonCard;