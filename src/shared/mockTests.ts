import { SUBJECTS_ENUM } from "./constants";
import { QUESTION_TYPES_ENUM, TestsList } from "./types";

export const mockTests: TestsList = {
  [SUBJECTS_ENUM.math]: [
    {
      name: 'Базовый',
      slug: 'base-test',
      tasks: [
        {
          id: 1,
          question: '5 + 3 = ?',
          questionType: QUESTION_TYPES_ENUM.one,
          answers: ['2', '11', '-8', '8'],
          correct: '8'
        },
        {
          id: 2,
          question: 'Что изучает математика?',
          questionType: QUESTION_TYPES_ENUM.multiple,
          answers: [
            'Числа',
            'Количественные отношения',
            'Пространственные формы',
            'Поэзия серебряного века'
          ],
          correct: [
            'Числа',
            'Количественные отношения',
            'Пространственные формы',
          ],
        },
        {
          id: 3,
          question: '5 * 3 = ?',
          questionType: QUESTION_TYPES_ENUM.one,
          answers: ['8', '53', '15', '18'],
          correct: '15'
        },
        {
          id: 4,
          question: '-5 + 3 = ?',
          questionType: QUESTION_TYPES_ENUM.one,
          answers: ['2', '3', '-5', '-2', '0'],
          correct: '-2'
        },
        {
          id: 5,
          question: 'x + 3 = 20; x = ?',
          questionType: QUESTION_TYPES_ENUM.number,
          answers: null,
          correct: '17'
        },
        {
          id: 6,
          question: '2 ** 3 = ?',
          questionType: QUESTION_TYPES_ENUM.one,
          answers: ['8', '6', '16', '5'],
          correct: '8'
        },
        {
          id: 7,
          question: '5 это число ___?',
          questionType: QUESTION_TYPES_ENUM.multiple,
          answers: ['Простое', 'Целое', 'Отрицательное', 'Сложное'],
          correct: ['Простое', 'Целое']
        },
        {
          id: 8,
          question: 'Чьи штаны во все стороны равны',
          questionType: QUESTION_TYPES_ENUM.one,
          answers: ['Пифагор', 'Синицын', 'Квадратов', 'Губка Боб'],
          correct: 'Пифагор'
        },
        {
          id: 9,
          question: '99 + 127 = ?',
          questionType: QUESTION_TYPES_ENUM.one,
          answers: ['126', '327', '226', '228'],
          correct: '226'
        },
        {
          id: 10,
          question: '21 / 3 = ?',
          questionType: QUESTION_TYPES_ENUM.one,
          answers: ['7', '8', '6.66', '0'],
          correct: '7'
        },
        {
          id: 11,
          question: 'Что вычисляется в прямоугольнике путем умножения длин двух смежных сторон',
          questionType: QUESTION_TYPES_ENUM.text,
          answers: null,
          correct: 'Площадь'
        },
      ],
    },
  ],
  [SUBJECTS_ENUM.geography]: [
    {
      name: 'Базовый',
      slug: 'base-test',
      tasks: [
        {
          id: 1,
          question: 'Столица РФ?',
          questionType: QUESTION_TYPES_ENUM.text,
          answers: null,
          correct: 'Москва'
        },
        {
          id: 2,
          question: 'Выбери существующие континенты на планете Земля',
          questionType: QUESTION_TYPES_ENUM.multiple,
          answers: ['Евразия', 'США', 'Австралия', 'Северный полюс'],
          correct: ['Евразия', 'Австралия']
        },
        {
          id: 3,
          question: 'Сколько существует континентов на планете Земля',
          questionType: QUESTION_TYPES_ENUM.number,
          answers: null,
          correct: '7'
        },
        {
          id: 4,
          question: 'Выбери правильный ответ',
          questionType: QUESTION_TYPES_ENUM.one,
          answers: ['Правильный', 'Ответ', 'Правильный ответ', 'Неправильный ответ'],
          correct: 'Правильный ответ'
        },
        {
          id: 5,
          question: 'Выбери правильный ответ',
          questionType: QUESTION_TYPES_ENUM.one,
          answers: ['Правильный', 'Ответ', 'Правильный ответ', 'Неправильный ответ'],
          correct: 'Правильный ответ'
        },
      ],
    },
  ],
}