import QuestionTitle from "./QuestionTitle"
import Anwser from "./Anwser";
import { useState } from "react";



const Question = (props) => {


    const [anwsers, setAnwsers] = useState([...props.data.incorrect_answers,props.data.correct_answer].sort(() => Math.random() - 0.5))

    const anwsersElements = (anwsers.map(anwser =>{
        return <Anwser
        correctAnwser = {props.anwser}
        endGame={props.endGame}
        value={anwser} 
        id={anwser} 
        key={anwser} 
        answerChoosen={(event) => props.handleChange(anwser,event)}
        isHighlighted={props.userAnswer === anwser}
        />
    })) 

    return(
        <div className="Question">
            <QuestionTitle title={props.question} />
            {anwsersElements}
        </div>
    )
}

export default Question

