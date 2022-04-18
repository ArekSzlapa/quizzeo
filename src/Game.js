import Question from "./Question"
import { useEffect, useState } from "react"

const Game=()=>{
    const [endGame, setEndGame] = useState(false)
    const [score, setScore] =useState(0)
    const [questions, setQuestions] = useState({})
    const [userAnswers, setUserAnswers] = useState({});
    const [restart,setRestart] = useState({})

    //przekazać pimitive value "ischecked" do odpowiedzi, poroównać do correct_anwser (map), zmienić background color


    useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5")
        .then(res=>res.json())
        .then(data=>{setQuestions(data.results)
        })
    }, [restart] )

    const handleChange = (answer, id)=>{
        setUserAnswers({...userAnswers, [id]: answer});
    }

    function checkScore(){
        setEndGame(true)
        const marked = (Object.values(userAnswers))
        const correct = [];
        for(let i=0;i<questions.length;i++){
            correct.push(questions[i].correct_answer)
        }
        for(let i=0;i<correct.length;i++){
            if(correct.includes(marked[i])){
                setScore(prevScore=>prevScore+1)
            }
        }
    }


    function restartGame(){
        setEndGame(false)
        setUserAnswers({})
        setRestart({})
        setScore(0)
    }
    
    return (
        <div className="Game--container">
            {
                questions.length > 0
                ? Object.values(questions).map(q => 
                <Question
                    endGame={endGame}
                    userAnswer={userAnswers[q.question]}
                    anwser={q.correct_answer} 
                    id={q.question}
                    handleChange={(answer) => handleChange(answer, q.question)}
                    falseAnwsers ={q.incorrect_anwsers}
                    question={q.question} 
                    key={q.question} 
                    data={q}>
                </Question>)
                : 'no questions ... :('
            }
            {endGame ? <><h3>You've got {score}/5 points!</h3><button onClick={restartGame} className="checkScore">Play again?</button></> : <button onClick={checkScore} className="checkScore">Check score!</button>}
        </div>
    )
}

export default Game