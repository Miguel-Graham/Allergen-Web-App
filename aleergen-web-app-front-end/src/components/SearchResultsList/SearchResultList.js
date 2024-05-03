import React from 'react';
import './SearchResultList.css';
import SearchResult from "../SearchResult/SearchResult.js";

const SearchResultList = ({results, setFood, setShowResults}) => {

    return (
        <div className= 'results-list'>
            {
                results && results.map((result) => {
                    return (
                        <SearchResult setFood={setFood} setShowResults={setShowResults} result={result} key={result.id} />
                    );
                })
            }
        </div>
    );
};

export default SearchResultList;
