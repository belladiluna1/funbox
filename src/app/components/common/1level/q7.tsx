import React from 'react';
import QuestionsTable from './question-table';

const questions = [
  {
    question: 'Инструменты',
    answer: 'Во первых, это использование VSCode и расширений в нём (Prettier, Auto CLose Tag, Auto Import, Auto Rename Tag и тд.). Так же очень помогает ESLint непосредственно для фиксирования ошибок в react коде. Можно так же скомпоновать его с Prettier. Для создания нового приложения react - Create React App. Иногда использую Bootstrap, если нужно сделать быстро.'
  }
]

export default function Q7(){
  return <>
    <h3 className="mt-5">
      Q7
    </h3>
    <span>
      Расскажите, какие инструменты помогают вам экономить время в процессе
      написания, проверки и отладки кода.
    </span>
    <QuestionsTable questions={questions} />
  </>
}