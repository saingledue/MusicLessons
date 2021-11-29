import React, { Component } from "react";
import './styles/lessoncard.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import { useHistory } from "react-router";
//https://mui.com/api/button/
    // console.log("test");
    // let path = `slideShow`;
    // let history = useHistory();
    // history.push(path);

class LessonCard extends Component {
    render() {
        return (
            <React.Fragment >
                <body className="lessoncard">
                    <h1 className ="naming" >
                        {this.props.lessonName}
                    </h1>
                    <p>
                        {this.props.description}
                    </p>
                    <Stack direction="row" className="button" spacing={2}>
                        <Button variant="contained" onClick={()=>{window.location.href='/slideShow'}}>Lesson</Button>
                        <Button variant="contained" onClick={()=>{window.location.href='/Exercise'}}>Exercise</Button>
                        <Button variant="contained" onClick={()=>{window.location.href='/quiz'}}>Quiz</Button>
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