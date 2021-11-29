import React, { Component, Suspense, useState,lazy,setState } from "react";
import NavBar from "./navbar";
import styles from './styles/quiz.module.css';
import Button from '@mui/material/Button';
import { TextField,LinearProgress } from "@mui/material";
const progress = 50;
const importView = questionName =>
  lazy(() =>
    import(`./questions/${questionName}`).catch(() => import(`./questions/nullQuestion`))
  );
  const QuestionList = ({ questions }) =>
  Object.values(questions).map(Question => (
    <Question/>
  ));
function Quiz(props){
    const [questions, setQuestions] = useState({});
    const addQuestion = questionName => {
        const Question = importView(questionName);
        setQuestions(questions => ({[questionName]: Question }));
      };
    const [isOpened,setIsOpened] = useState(false);
    const [isAnswerSubmitted,setIsAnswerSubmitted] = useState(false);
    return (
        <React.Fragment>
        <div className="App">
            <NavBar></NavBar>
            <div className={styles.buttonContainer}>
              <div>
              <Button variant="contained" onClick={()=>{window.location.href='/'}}>Go Home</Button>
              </div>
              <div>
              <Button variant="contained" onClick={()=>{window.location.href='/Exercise'}}>Go to Exercise</Button>
              </div>
              <div>
                <Button variant="contained" onClick={()=>{window.location.href='/slideShow'}}>Go To Next Lesson</Button>
              </div>
            </div>
            <h1>Basic Note Identification: Quiz</h1>
            <div class={styles.contentBody}>
              <div></div>
              <div class={styles.contentArea}>
                {!isOpened && (<div><Button variant="contained" onClick={()=>{setIsOpened( s => ({isOpened: !s.isOpened}) );addQuestion("question1");}}>Start Quiz</Button></div>)}
                {isOpened && (<div class={styles.contentHolder}>
                <p>Progress</p>
                <LinearProgress variant="determinate" value={progress} />
                <Suspense fallback={<div>Loading...</div>}>
                    <QuestionList questions={questions} />
                </Suspense>
                {!isAnswerSubmitted && (
                    <div className={styles.inputArea}>
                      <div><TextField id="outlined-basic" label="Answer" variant="outlined"  size="small"/></div>
                      <div><Button variant="contained" onClick={()=>{setIsAnswerSubmitted(!isAnswerSubmitted)}}>Submit Answer</Button></div>
                    </div>
                )}
                {isAnswerSubmitted && (<div>
                      <div><h1>You got the correct Answer</h1></div>
                      <br/>
                      <div><Button variant="contained" onClick={()=>{setIsAnswerSubmitted(!isAnswerSubmitted);addQuestion("question2");}}>Move on to next Question</Button></div>
                      <br/>
                      <div><Button variant="contained" onClick={()=>{window.location.href='/'}}>Exit Quiz</Button></div>
                      </div>
                )}
                

                </div>)}
              </div>
              <div></div>
            </div>
        </div>
        </React.Fragment>
      );
}
  export default Quiz;