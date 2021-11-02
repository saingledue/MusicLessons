
import React, { Component, Suspense, useState,lazy,setState,useEffect } from "react";
import NavBar from "./navbar";
import sampleLessonPicture from './images/clefsLesson.png'
import styles from './styles/slideShowViewer.module.css';
import Button from '@mui/material/Button';
const importView = slideName =>
  lazy(() =>
    import(`./slides/${slideName}`).catch(() => import(`./slides/nullSlide`))
  );
  const SlideList = ({ slides }) =>
  Object.values(slides).map(Slide => (
    <Slide/>
  ));
  var slideNumber = 1;
  var loaded = false;
  function SlideShowViewer(){
    const [slides, setSlides] = useState({});
    const addSlide = slideName => {
        loaded =true;
        const Slide = importView(slideName);
        setSlides(slides => ({[slideName]: Slide }));
      };
      useEffect(() => {
        if(!loaded){
          addSlide("lesson1slide1");
        }
      });
      return (
        <React.Fragment>
            <div className={styles.container}>
                <Suspense fallback={<div>Loading...</div>}>
                    <SlideList slides={slides} />
                </Suspense>
            </div>
            <div className={styles.buttonHolder}>
              <div></div>
              <div>
              <Button variant="contained" onClick={()=>{if(slideNumber>1){slideNumber=slideNumber-1;}addSlide(("lesson1slide"+slideNumber));}}>Previous</Button>
              </div>
              <div>
              <Button variant="contained" onClick={()=>{slideNumber=slideNumber+1; console.log(slideNumber); console.log("lesson1slide"+slideNumber); addSlide(("lesson1slide"+slideNumber));}}>Next</Button>
              </div>
              <div></div>
            </div>
        </React.Fragment>
  );
}
  export default SlideShowViewer;