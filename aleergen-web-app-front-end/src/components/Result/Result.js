import React from 'react';
import './Result.css';

const Result = ({output}) => {
    return (
        <div className='results-container'>
            <div className='results'>
                {output.map((item, index) => (
                    <div key={index} className='result-item'>
                        <h2>{item.allergyName}</h2>
                        <p>{item.description} calories</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Result;
