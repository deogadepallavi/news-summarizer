import React, {useEffect, useState} from 'react';
import './search.styles.css';
import Metaphor, {SearchResponse} from "../metaphor/metaphor-api";
import SearchResult from "./SearchResults";
import {SearchComponent} from "./SearchComponent";

function Search() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResponse, setSearchResponse] = useState<SearchResponse>({autopromptString: "", results: []});
    let metaphor = new Metaphor("5b12e8f1-9669-4cb1-9904-b9fda5a57a64");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchClick = async () => {
        console.log('News summarizer for:', searchTerm);
        const response = await metaphor.search(searchTerm, {
            includeDomains: [
                "foxnews.com",
                "bbc.com",
                "cnn.com",
                "news.sky.com",
                "msnbc.com",
                "euronews.com",
                "geotv.com",
                "abcnews.go.com"
            ]
        });

        setSearchResponse(response);
    };

    function clearResults() {
        setSearchResponse({autopromptString: "", results: []});
    }

    return (
        <div>
            {searchResponse.results.length !== 0 ? <button type="button" className={"search-button"} onClick={() => clearResults()}>Clear Results</button> : null}
            {searchResponse.results.length === 0 ? <SearchComponent value={searchTerm} onChange={handleSearchChange} onClick={handleSearchClick}/> : <SearchResult apiClient={metaphor} searchResponse={searchResponse}/>}

        </div>
        
    );
}


export default Search;
