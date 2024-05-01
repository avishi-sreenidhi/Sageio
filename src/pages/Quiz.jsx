import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";

const Quiz = () => {
  const [questions, setQuestions] = useState([
    { id: 1, question: 'What is 2 + 2?', answer: '4', userAnswer: '' },
    { id: 2, question: 'What is the capital of France?', answer: 'Paris', userAnswer: '' },
    { id: 3, question: 'What is the largest planet in our solar system?', answer: 'Jupiter', userAnswer: '' }
  ]);

  const [timer, setTimer] = useState(60); // Timer set to 60 seconds
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);

  useEffect(() => {
    if (quizStarted) {
      let timerCount = timer;
      const interval = setInterval(() => {
        if (timerCount > 0) {
          setTimer(prevTimer => prevTimer - 1);
          timerCount--;
        } else {
          clearInterval(interval);
          endQuiz();
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer, quizStarted]);

  const startQuiz = () => {
    // Logic to start the quiz
    setQuizStarted(true);
    console.log('Quiz started');
  };

  const submitQuiz = () => {
    // Logic to submit the quiz
    console.log('Quiz submitted:', questions);
    endQuiz();
  };

  const endQuiz = () => {
    setQuizEnded(true);
    setQuizStarted(false);
    console.log('Quiz ended');
  };

  return (
    <div>
      <Header />
    <div className="flex justify-center items-center h-screen">
      <div className="quiz-container p-4 bg-green-50 rounded-lg border border-black">
        <h1 className="text-3xl font-bold mb-4">Quiz</h1>
        {!quizStarted && !quizEnded && (
          <button onClick={startQuiz} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Start Quiz</button>
        )}
        {quizStarted && !quizEnded && (
          <div>
            <div className="mb-4">
              <p className="font-bold">Timer: {timer}</p>
              <button onClick={submitQuiz} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">Submit Quiz</button>
            </div>
            <div className="mt-4">
              {questions.map(question => {
                return (
                  <div key={question.id} className="mb-4">
                    <p>{question.question}</p>
                    <input
                      type="text"
                      value={question.userAnswer}
                      onChange={e => {
                        // Update the user answer in the state
                        const updatedQuestions = questions.map(q =>
                          q.id === question.id ? { ...q, userAnswer: e.target.value } : q
                        );
                        setQuestions(updatedQuestions);
                      }}
                      className="border rounded px-2 py-1 mt-2"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {quizEnded && (
          <div>
            <h2 className="text-xl font-bold mb-2">Quiz Ended</h2>
            <p className="font-bold">Results:</p>
            {questions.map(question => (
              <div key={question.id} className="mb-4">
                <p>{question.question}</p>
                <p>User Answer: {question.userAnswer}</p>
                <p>Correct Answer: {question.answer}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Quiz;
