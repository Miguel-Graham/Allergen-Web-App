import React, {useEffect, useState} from 'react';
import { FaSearch } from "react-icons/fa";
import './SearchBar.css';
import {fetchMenuItems, fetchResultList} from "../../api/api.js";

const SearchBar = ({ setResults, food, setShowResults, setOutput}) => {
    const [input, setInput] = useState('');

    useEffect(() => {
        setInput(food);
    }, [food]);

    const fetchFood = async (value) => {
        try {
            const response = await fetchMenuItems(value);
            setResults(response);
            console.log(response.name);
        } catch (error) {
            console.log(error);
        }
    };

    const handleButtonClick = async () => {
        try {
            const response = await fetchResultList(input);
            setOutput(response);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setInput(inputValue);
        setShowResults(inputValue !== ''); // Show results only if input value is not empty
        fetchFood(inputValue); // Call fetchFood with updated input value
    }

    return (
        <div>
            <div className='input-wrapper'>
                <button className='search-button' onClick={handleButtonClick}><FaSearch className='search-icon' /></button>
                <input
                    placeholder='Search for a food'
                    value={input}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default SearchBar;
