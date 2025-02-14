import React, {useState} from "react";
import { data } from "./data";
import './quizstyle.css';

export default function Quizapp () {
    const [index, setIndex] = useState(0);
    const [option, setOption] = useState('');
    const [finished , setFinish] = useState(false);
    const [score, setScore] = useState(0);
    const correctedAnswers = ['Option1','Option1','Option1','Option1','Option1',
        'Option1','Option1','Option1','Option1','Option1'];

    const handleNext = () => {
        if (index < data.length-1) {
            if (correctedAnswers[index] === option) {  // check the answer for last question
                setScore(score+1);
            }
            setIndex(index+1);
            setOption(null);
        } else {
            setFinish(true);
        }
    }
    if (finished) {
        return (
            <div className="scorePage">
            <h3>Quiz Finished</h3>
            <h1> Your score is {score} out of {data.length}</h1>
            </div>
        )
    }
    const handleSelect = (optn) => {
        setOption(optn);
    }
return (
    <div className='quiz'>
        <h1>{data[index].Question}</h1>
        <ul>
            <li className={option === 'Option1'? 'selected':'' }
            onClick={() => {handleSelect('Option1')}}>{data[index].Option1}</li>

            <li className={option === 'Option2'? 'selected':'' }
            onClick={() => {handleSelect('Option2')}}>{data[index].Option2}</li>

            <li className={option === 'Option3'? 'selected':'' }
            onClick={() => {handleSelect('Option3')}}>{data[index].Option3}</li>

            <li className={option === 'Option4'? 'selected':'' }
            onClick={() => {handleSelect('Option4')}}>{data[index].Option4}</li>
        </ul>
        <button onClick={handleNext} disabled = {!option}>Next</button>
        <h5>Question {index+1} of {data.length}</h5>
    </div>
)
}