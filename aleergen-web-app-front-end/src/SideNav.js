import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SideNav.css";

const SideNav = ({ setSearchTerm }) => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get("/allergy/getMenuList");
                setMenuItems(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMenuItems();
    }, []);

    return (
        <div className="sidenav">
            {menuItems.map((item) => (
                <input
                    key={item.id}
                    type="text"
                    value={item.name}
                    readOnly
                    onClick={() => setSearchTerm(item.name)}
                />
            ))}
        </div>
    );
};

export default SideNav;