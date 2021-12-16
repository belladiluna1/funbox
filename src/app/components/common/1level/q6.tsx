import React from 'react';
import QuestionsTable from './question-table';

const questions = [
  {
    question: 'Ваши действия?',
    answer: 'Есть два варианта развития событий: либо мы пишем свой валидатор полей формы, либо используем библиотеку (например Yup). В любом случае необходимо учесть все особенности того или иного поля (обязательные поля, проверка пароля на определенные символы и количество символов, проверка email, проверка телефона). Так же необходимо обработать событие ошибки: в Bootstrap можно добавить классы для красивого отображения ошибки, либо сверстать своё отображение.'
  }
]

export default function Q6(){
  return <>
    <h3 className="mt-5">
      Q6
    </h3>
    <span>
      Вам нужно реализовать форму для отправки данных на сервер, состоящую из
      нескольких шагов. В вашем распоряжении дизайн формы и статичная верстка, в
      которой не показано, как форма должна работать в динамике. Подробного описания,
      как должны вести себя различные поля в зависимости от действий пользователя, в
      требованиях к проекту нет.
    </span>
    <QuestionsTable questions={questions} />
  </>
}