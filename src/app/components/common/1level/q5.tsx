import React from 'react';
import QuestionsTable from './question-table';

const questions = [
  {
    question: 'Какие библиотеки можно использовать для написания тестов end-to-end во фронтенде?',
    answer: 'Для написания тестов можно использовать mocha.'
  },
  {
    question: 'Расскажите о своем опыте тестирования веб-приложений.',
    answer: 'Опыта тестирования веб-приложений нет.'
  }
]

export default function Q5(){
  return <>
    <h3 className="mt-5">
      Q5
    </h3>
    <QuestionsTable questions={questions} />
  </>
}