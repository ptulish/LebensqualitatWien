import React from 'react';
import { useLocation } from 'react-router-dom';

function SearchResultPage() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');
    const data = location.state?.data;
    return (
        <div>
            <h2>Search Results for: {data}</h2>
            <h1>HEllo world</h1>
        </div>
    );
}

export default SearchResultPage;
