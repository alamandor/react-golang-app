// src/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <nav className="sidebar">
            <h2>Sidebar</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                {/* Add more sidebar entries with corresponding paths */}
            </ul>
        </nav>
    );
}

export default Sidebar;
