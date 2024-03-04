import normalizeCountForm from "../utils/normalize-count-form";

export const Result = ({correct, countQuestions, resetQuiz}) => {
    const word = normalizeCountForm(correct, ['ответ', 'ответа', 'ответов']);

    return (
        <div className="result">
          <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
          <h2>{`Вы отгадали ${correct} ${word} из ${countQuestions}`}</h2>
          <button onClick={() => resetQuiz()}>Попробовать снова</button>
        </div>
      );
}