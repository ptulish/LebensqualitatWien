import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import WienPanoImage from "./components/wien-pano-image";
import SearchResultPage from './pages/search-result-page'; // You'll create this component

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header" style={{
                    height: '6vh',
                }}><Header /></header>
                <Routes>
                    <Route path="/" element={<WienPanoImage />} />
                    <Route path="/search-result" element={<SearchResultPage />} />
                    {/* Define additional routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
