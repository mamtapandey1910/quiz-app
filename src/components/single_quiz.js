import React, { Component } from 'react'
import Score from './score'
import './component.css'

export default class Single_quiz extends Component {
    state = {
        score: 0
    }

    myscore = (e, i) => {
        // console.log(e.target.dataset.iscorrect)
        if (this.props.quiz.options[i].iscorrect === true) {
            this.setState({ score: this.state.score + 1 })
        }
        this.props.nextelement(this.state.score)
        // let mystr = x.answerText 
        // console.log(mystr.compareTo(e.target.textContent))

    }

    render() {
        {
            if (this.props.index === this.props.length) {
                return <Score score={this.state.score} length={this.props.length} />
            }
            else {
                return (
                    <div className='maindiv'>

                        <div className="quizclass">
                            <div className='quiz_question'>
                                <div className="quiz_heading">
                                    <span><h1 style={{ "fontWeight": "500" }}>Question  {this.props.index + 1}</h1></span>
                                    <span style={{ "marginTop": "9px" }}>/{this.props.length}</span>
                                </div>
                                <div className="questions">
                                    <span><p>{this.props.quiz.question}</p></span>
                                </div>
                            </div>
                            <ul className='mylist'>
                                {this.props.quiz.options.map((elem, i) => <li className='options' key={i} onClick={(e) => this.myscore(e, i)}>{elem.answerText} </li>)}
                            </ul>
                        </div>

                    </div>
                )
            }
        }
    }
}
