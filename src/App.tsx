import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import WienPanoImage from "./pages/wien-pano-image";
import SearchResultPage from './pages/search-result-page';
import ExplainAlgorithmPage from "./pages/explain-algorithm-page";
import StatsPage from "./pages/stats-page";
import FeedbacksPage from "./pages/feedbacks-page"; // You'll create this component

function App() {
    return (
        <Router>
            <div className="App">
                <div style={{height:'6vh', position: 'static'}}>
                    <Header/>
                </div>
                <div className="App-content">
                    <Routes>
                        <Route path="/" element={<WienPanoImage />} />
                        <Route path="/search-result" element={<SearchResultPage />} />
                        <Route path="/alg-explain" element={<ExplainAlgorithmPage />} />
                        <Route path="/stats" element={<StatsPage />} />
                        <Route path="/feedbacks" element={<FeedbacksPage />} />
                    </Routes>
                </div>

            </div>
        </Router>
    );
}

export default App;
