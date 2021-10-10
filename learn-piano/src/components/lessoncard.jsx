import React, { Component } from "react";
import './styles/lessoncard.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
//https://mui.com/api/button/
class LessonCard extends Component {

    render() {
        return (
            <React.Fragment >
                <body className="lessoncard">
                    <h1 >
                        {this.props.lessonName}
                    </h1>
                    <p>
                        {this.props.description}
                    </p>
                    <Stack direction="row" className="button" spacing={2}>
                        <Button variant="contained" href='home.js'>Lesson</Button>
                        <Button variant="contained" disabled>Exercise</Button>
                        <Button variant="contained" href="#contained-buttons" disabled>Quiz</Button>
                    </Stack>
                </body>
            </React.Fragment>
        );
    }
}

LessonCard.propTypes = {
    lessonName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default LessonCard;