import { useState } from 'react';
import { Game } from './components/game';
import { Result } from './components/result';
import { questions } from './questions'
import './index.scss'


function App() {
  const [step, setStep] = useState(0);
  const question = questions[step];
  const [correct, setCorrect] = useState(0);
  

  const onClickVariant = (index) => {
    if(index === question.correct) {
      setCorrect(correct + 1);
    }

    setStep(step + 1)
  }

  const resetQuiz = () => {
    setCorrect(0);
    setStep(0);
  }

  return (
    <div className="App">
      {
        step !== questions.length 
          ? <Game
              question={question}
              onClick={onClickVariant}
              step={step}
              countQuestions={questions.length}
            />
         : <Result
            correct={correct}
            countQuestions={questions.length}
            resetQuiz={resetQuiz}
          />
      }

     



     {/* <Result/> */}
    </div>
  );
}

export default App;
