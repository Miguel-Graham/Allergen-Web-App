import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = ({ setMenu }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedAllergy, setSelectedAllergy] = useState("");
    const [response, setResponse] = useState("");
    const [allergies, setAllergies] = useState([]);

    useEffect(() => {
        const fetchAllergies = async () => {
            try {
                const response = await axios.get("/allergy/getAllergies"); // Replace with your API endpoint
                setAllergies(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAllergies();
    }, []);

    const handleSearch = async () => {
        try {
            const response = await axios.get("/allergy/getAllergy", {
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
                {allergies.map((allergy) => (
                    <option key={allergy.id} value={allergy.name}>{allergy.name}</option>
                ))}
            </select>

            <button className="btn btn-primary mt-2" onClick={handleSearch}>
                Search
            </button>
            {response && (
                <div className="response-container mt-2">
                    <h5>Allergens:</h5>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default SearchBar;