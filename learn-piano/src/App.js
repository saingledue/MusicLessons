import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar";
import LessonCard from "./components/lessoncard";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <LessonCard></LessonCard>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
