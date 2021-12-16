import React from 'react';
import QuestionsTable from './question-table';

const questions = [
  {
    question: 'Presentational Сomponents',
    answer: 'Отвечают за внешний вид компонента. Управляют только состоянием, связанным с отображением компонента.'
  },
  {
    question: 'Сontainer Сomponents',
    answer: 'Могут содержать несколько Презентационных компонентов для отображения информации. Управляют состояниями всех дочерних компонентов.'
  }
]

export default function Q3(){
  return <>
    <h3 className="mt-5">
      Q3
    </h3>
    <span>При разработке интерфейсов с использованием компонентной архитектуры часто
    используются термины Presentational Сomponents и Сontainer Сomponents. Что
    означают данные термины? Зачем нужно такое разделение, какие у него есть плюсы и
    минусы?</span>
    <QuestionsTable questions={questions} />
  </>
}