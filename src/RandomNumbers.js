import React, { useState, useEffect} from 'react';
import Calculations from './Calculations';
import './RandomNumbers.css';

function* generateRandomNumber(count, max) {
    const min = 1;
    let index = 0;

    while (index < count) {
        yield Math.floor(Math.random() * (max - min + 1)) + min;
        index = index + 1;
    }
}

const RandomNumbers = ({count, max}) => {
    const [numbers, setNumbers] = useState([]);

    const handleClick = () => {
        const iterator = generateRandomNumber(count, max);
        setNumbers(Array.from(iterator));
    }

    useEffect(() => {
        const iterator = generateRandomNumber(count, max);
        setNumbers(Array.from(iterator));
        console.log('abc');
    }, [count, max]);

    return (
    <div>
        <button className='button' onClick={handleClick}>Click Me To Generate Random Numbers</button>
        <ul>
            {
                numbers.map((number, index) => (
                    <li className='list' key={index}>{number}</li>
                ))
            }
        </ul>
        {numbers.length > 0 && <Calculations numbers={numbers}/>}
    </div>
    )
}

export default RandomNumbers;