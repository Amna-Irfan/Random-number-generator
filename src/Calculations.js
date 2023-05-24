import React, { useState, useEffect} from 'react';
const Math = require('mathjs');

const Calculations = ({numbers}) => {
    const [average, setAverage] = useState(null);
    const [minimum, setMinimum] = useState(null);
    const [maximum, setMaximum] = useState(null);

    useEffect(() => {
        setAverage(Math.mean(numbers));
        setMinimum(Math.min(numbers));
        setMaximum(Math.max(numbers));
    }, [numbers]);

    return (
    <div>
        <h4>Here are some calculations for the above numbers: </h4>
        <p>Average: {average}</p>
        <p>Minimum: {minimum}</p>
        <p>Maximum: {maximum}</p>
    </div>
    )
}

export default Calculations;