import Metaphor, {GetContentsResponse, SearchResponse} from "../metaphor/metaphor-api";
import '../components/SearchResult.css';
import React, {useEffect, useState} from "react";
import ContentViewer from "./ContentViewer";

interface SearchResponseProps {
    apiClient: Metaphor;
    searchResponse: SearchResponse;
}
function SearchResult(props: SearchResponseProps) {
    let metaphor: Metaphor = props.apiClient;

    const [stateValue, setStateValue] = useState(props.searchResponse);
    const [viewContentResponse, setViewContentResponse] = useState<GetContentsResponse>({contents: []});

    useEffect(() => {
        setStateValue(props.searchResponse)
    }, [props.searchResponse]);

    const handleLearnMoreClick = async (id: string) => {
        const response: GetContentsResponse = await metaphor.getContents([id]);
        setViewContentResponse(response);
    };

    async function handleSimilarContentClick(url: string) {
        const response: SearchResponse = await metaphor.findSimilar(url);
        setStateValue(response);
    }

    function getSearchResultsData() {
        return <div className="search-result">
            {stateValue?.results.map((result) => (
                <div key={result.id} className="result">
                    <h2>{result.title}</h2>
                    <p className="textFont-style">
                        Author: {result.author || 'Unknown'}
                    </p>
                    <p className="textFont-style">
                        Published Date: {result.publishedDate || 'N/A'}
                    </p>
                    <p className="textFont-style">
                        URL: <a href={result.url} target="_blank" rel="noopener noreferrer">{result.url}</a>
                        <br/>
                        <button type="button" className={"learnMore-button"}
                                onClick={() => handleLearnMoreClick(result.id)}>Learn More!
                        </button>
                        <button type="button" className={"similarContent-button"}
                                onClick={() => handleSimilarContentClick(result.url)}>Find Similar Content!
                        </button>
                    </p>
                </div>
            ))}
        </div>
    }

    function handleBackClick() {
        const response: GetContentsResponse = {
            contents : []
        }
        setViewContentResponse(response);
    }

    return (
        <div>
            {(viewContentResponse.contents.length > 0) ?
                (<ContentViewer
                    documents={viewContentResponse.contents}
                    onBackClick={() => handleBackClick()}
                />) :
                getSearchResultsData()
            }

        </div>
    );
}

export default SearchResult;