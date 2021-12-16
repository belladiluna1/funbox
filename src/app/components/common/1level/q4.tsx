import React from 'react';
import QuestionsTable from './question-table';

const questions = [
  {
    question: 'Как устроено наследование в JS?',
    answer: 'Как такового наследования в JS нет. Реализовать его можно через конструктор класса и прототипы.'
  },
  {
    question: 'Расскажите о своем опыте реализации JS наследования без использования фреймворков.',
    answer: 'В реальных проектах не было необходимости использовать наследование. Есть опыт реализации его только в учебных заданиях.'
  }
]

export default function Q4(){
  return <>
    <h3 className="mt-5">
      Q4
    </h3>
    <QuestionsTable questions={questions} />
  </>
}