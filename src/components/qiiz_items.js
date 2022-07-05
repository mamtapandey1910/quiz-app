import React, { useState } from 'react'
import './component.css'
import Single_quiz from './single_quiz'

export default function Qiiz_items() {

    const [mylist, setmylist] = useState([
        {
            question: 'What is the boiling point temperature (water)?',
            options: [
                { answerText: '50 °C', iscorrect: false },
                { answerText: '100 °C', iscorrect: true },
                { answerText: '150 °C ', iscorrect: false },
                { answerText: '200 °C', iscorrect: false },
            ]
        },
        {
            question: 'Which fruit is associated with Isaac Newton?',
            options: [
                { answerText: 'Apple', iscorrect: true },
                { answerText: 'Pear', iscorrect: false },
                { answerText: 'Pineapple', iscorrect: false },
                { answerText: 'Banana', iscorrect: false },
            ]
        },
        {
            question: 'Which one of the following scientists is known for his contributions to the science of evolution?',
            options: [
                { answerText: 'Marie Curie', iscorrect: false },
                { answerText: 'Thomas Edison', iscorrect: false },
                { answerText: 'Stephen Hawking', iscorrect: false },
                { answerText: 'Charles Darwin', iscorrect: true },
            ]
        },
        {
            question: 'In which city did Diana, Princess of Wales, died?',
            options: [
                { answerText: 'London', iscorrect: false },
                { answerText: 'Edinburgh', iscorrect: false },
                { answerText: 'New York City ', iscorrect: false },
                { answerText: 'Paris', iscorrect: true },
            ],
        }
    ])

    const [listindex, setlistindex] = useState(0);
    let elem = mylist[listindex]

    function nextelement(scr) {
        let incrementindex = listindex + 1
        if (incrementindex <= mylist.length) {
            setlistindex(incrementindex)

        }
    }

    return (
        <div className='basebg'>
            <Single_quiz quiz={elem} index={listindex} length={mylist.length} nextelement={nextelement} />
        </div>
    )
}
