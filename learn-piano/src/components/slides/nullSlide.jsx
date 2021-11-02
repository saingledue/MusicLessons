
import React, { Component } from "react";
import Button from '@mui/material/Button';
class nullSlide extends Component {
    render() {
      return (
        <React.Fragment>
            <h1>End of Slides</h1>
            <div><Button variant="contained" onClick={()=>{window.location.href='/Exercise'}}  size="small">Go to Exercise</Button></div>
            <br/>
        </React.Fragment>
      );
    }
  }
  export default nullSlide;