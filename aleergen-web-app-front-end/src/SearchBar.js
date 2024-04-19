import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedAllergy, setSelectedAllergy] = useState("");
    const [response, setResponse] = useState("");
    const [allergies, setAllergies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllergies = async () => {
            try {
                const response = await axios.get("/allergy/getAllergies");
                setAllergies(response.data);
            } catch (error) {
                console.error(error);
                setError("Error fetching allergies. Please try again.");
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

            setResponse(response.data);
        } catch (error) {
            console.error(error);
            setError("Error searching for allergy. Please try again.");
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
            {error && (
                <div className="alert alert-danger mt-2" role="alert">
                    {error}
                </div>
            )}
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
