import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <div className="container">

        <h3>Questions and answers about login</h3>
        <section className="info">
          <ul>
            {questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />
            })}
          </ul>
        </section>
      </div>

    </main >
  )
}

export default App;
