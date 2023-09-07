import React, { useState } from "react";
import axios from "axios";
import "./SearchBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = ({ setMenu }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedAllergy, setSelectedAllergy] = useState("");
    const [response, setResponse] = useState("");

    const handleSearch = async () => {
        try {
            const response = await axios.get("http://localhost:8080/allergy/getAllergy", {
                params: {
                    dishName: searchTerm,
                    allergyName: selectedAllergy,
                },
            });

            // Do something with the response data
            setResponse(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSelectChange = (event) => {
        setSelectedAllergy(event.target.value);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search for a dish"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="form-control"
            />
            <select
                className="form-control mt-2 dropdown-select"
                value={selectedAllergy}
                onChange={handleSelectChange}
            >
                <option value="">Select Allergy</option>
                <option value="peanuts">Peanuts</option>
                <option value="dairy">Dairy</option>
                <option value="gluten">Gluten</option>
                <option value="Nuts">Nuts</option>
                <option value="shellfish">Shellfish</option>

            </select>
            <button className="btn btn-primary mt-2" onClick={handleSearch}>
                Search
            </button>
            {response && (
                <div className="response-container mt-2">
                    <h5>Response:</h5>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default SearchBar;