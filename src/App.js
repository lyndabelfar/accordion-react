import './App.css';
import {useState} from 'react'
import Question from './Question';
import data from './data';

function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <div className="App">
      <div className='container'>
        <h1 className="title">questions and answers about login</h1>
        <div className='component-div'>
          {questions.map((question)=>{
            return <Question question={question} key={question.id}  />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
