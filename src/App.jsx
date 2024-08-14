import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import data from './data.json'
import Question from './Question'
import Button from './Button'
import { nanoid } from 'nanoid'
import Header from './Header'

import {decode} from 'html-entities';

export default function App() {
  
  const [quizData, setQuizData] = useState([])

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    .then(res => res.json())
    .then(data => setQuizData(data.results))
  }, [])

  const questionData = quizData.map(question => {
    const incorrectObjects = (question.incorrect_answers).map(answer => {
      return {
        text: decode(answer), isCorrect: false
      }
    })
    return {
      question: decode(question.question), 
      correct: {
        text: decode(question.correct_answer), 
        isCorrect: true
      }, 
      incorrect: incorrectObjects
    }
  })

  const quizElements = questionData.map(question => {
    return <Question 
                key={nanoid()}
                question={question.question} 
                correct={question.correct}
                incorrect={question.incorrect}
            />
  })


  return (
    <div>
      <Header />
      <div className='container'>
        {quizElements}
      </div>
      
    </div>
  )
}