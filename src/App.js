// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Sidebar from './Sidebar';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <Routes>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/products" component={ProductsPage} />
                    {/* Add more routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
