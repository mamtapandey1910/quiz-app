import React from 'react'
import './component.css'

export default function score(props) {
    return (
        <div>
            <div className="quizclass">
                <div className="scoreinnerclass"><h1>your score is {props.score}/{props.length}</h1></div> </div>
        </div>
    )
}
