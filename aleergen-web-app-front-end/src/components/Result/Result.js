import React from 'react';
import './Result.css';

const Result = ({output}) => {
    // Check if output is an object and contains the properties you expect
    if (typeof output === 'object' && output !== null && 'allergyResults' in output && 'ingredients' in output) {
        return (
            <div className='results-container'>
                <div className='results'>
                    {/* Map over the list and render each item */}
                    {output.allergyResults.map((item, index) => (
                        <div key={index} className='result-item'>
                            <h2>{item.allergyName}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
                {/* Render the string in a div below the list */}
                <div className='output-string'>
                    <h2>Ingredients</h2>
                   <div className='text'> {output.ingredients} </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default Result;
