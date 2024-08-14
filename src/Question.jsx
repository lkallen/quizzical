import { useState } from "react"
import { useEffect } from "react"
import { nanoid } from 'nanoid'
import Button from "./Button"

export default function Question(props) {
    const question = props.question
    const correctChoice = props.correct
    const incorrectChoices = props.incorrect
    function shuffle(array) {
        for(let i = array.length - 1; i > 0; i--) {
            const random = Math.floor(Math.random() * (i + 1));
            [array[i], array[random]] = [array[random], array[i]];
        }
        return array;
    }
    function generateAnswers() {
        let answerChoices = incorrectChoices
        answerChoices.push(correctChoice)
        shuffle(answerChoices)
        return answerChoices
    }

    const [answerChoices, setAnswerChoices] = useState(generateAnswers())
    console.log(answerChoices)

  

    const answerButtons = answerChoices.map(answer => {
        return <Button
                    key={nanoid()}
                    text={answer.text}
                    isCorrect={answer.isCorrect}
                    
            /> 
    })

    
    return (
        <div>
            <h4>{question}</h4>
            <div className="buttonContainer">
                {answerButtons}
            </div>
        </div>
    )

}