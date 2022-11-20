import React, { useState } from 'react';
import SingleQuestion from './Question';
import data from './data';


function App() {
  const [questions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>Questions And Answers About Login</h3>
        <section className='information'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;