import React, { useState, useEffect } from "react";
import "./SideNav.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SideNav = ({ setSearchTerm }) => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await fetchMenuItems();
                setMenuItems(response.sort((a, b) => a.name.localeCompare(b.name)));
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
