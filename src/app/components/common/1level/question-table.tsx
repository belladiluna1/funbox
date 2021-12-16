import React from 'react';

export interface IQuestion {
  question: string;
  answer: string;
}

export default function QuestionsTable({
  questions
}:{
  questions: IQuestion[]
}){
  return <>
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Вопрос</th>
          <th scope="col">Ответ</th>
        </tr>
      </thead>
      <tbody>
        {questions.map((question, index) => <tr key={index}>
          <th scope="row">{question.question}</th>
          <td>{question.answer}</td>
        </tr>)}
      </tbody>
    </table>
  </>
}