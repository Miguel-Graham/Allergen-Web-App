import React from 'react';
import './SearchResult.css';

const SearchResult = ({result, setFood, setShowResults}) => {
    return (
        <div className='search-result' onClick={(e) =>{
            setFood(result.name);
            setShowResults(false)}}>
            {result.name}
        </div>
    );
};

export default SearchResult;
