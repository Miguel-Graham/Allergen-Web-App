import React, {useState} from 'react';
import './home.css';
import SearchBar from "../../components/SearchBar/SearchBar.js";
import SearchResultList from "../../components/SearchResultsList/SearchResultList.js";
import Result from "../../components/Result/Result.js";

const Home = () => {
    const [results, setResults] = useState([]);
    const [food, setFood] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [output, setOutput] = useState([]);

    return (
        <div className='home'>
        <div className= 'search-bar-container'>
            <SearchBar setOutput={setOutput} setResults = {setResults} food={food} setShowResults={setShowResults}/>
            {showResults && <SearchResultList results = {results} setFood = {setFood} setShowResults={setShowResults}/>}
        </div>
            <Result output={output}/>
        </div>
    );
};

export default Home;
