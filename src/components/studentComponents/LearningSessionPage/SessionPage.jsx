import React from 'react';
import Question from './Question'; // Import the QuizQuestion component

class SessionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        { 
            question: 'What is the capital of France?', 
            answer: 'Paris', 
            options: ['Paris', 'Berlin', 'Chateaux', 'London'] 
        },
        { 
            question: 'What is the tallest mountain in the world?', 
            answer: 'Mount Everest', 
            options: ['Mount Washington', 'Mount St. Helen', 'Mount Fuji', 'Mount Everest']  }
        // Add more questions as needed
      ],
    };
  }

  render() {
    return (
      <div className="quiz-session">
        <h1>Quiz Session</h1>
        <div className="quiz-questions">
          {this.state.questions.map((question, index) => (
            <Question key={index} {...question} />
          ))}
        </div>
      </div>
    );
  }
}

export default SessionPage;