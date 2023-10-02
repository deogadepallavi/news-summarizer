import React from 'react';
import {DocumentContent} from "../metaphor/metaphor-api";
import {extractParagraphContent} from "../services/ParagraphExtractor";

interface ContentViewerProps {
    documents: DocumentContent[];
    onBackClick: Function
}

function ContentViewer( props : ContentViewerProps) {
    return (
        <div className="document-list">
            <button type="button" className={"btn btn-primary"} onClick={() => props.onBackClick(true)}>Back</button>
            {props.documents.map((document) => (
                <div key={document.id} className="document">
                    <h2>{document.title}</h2>
                    <p>
                        <strong>URL:</strong>{' '}
                        <a href={document.url} target="_blank" rel="noopener noreferrer">
                            {document.url}
                        </a>
                    </p>
                    <p>
                        <strong>Summary:</strong> {extractParagraphContent(document.extract)}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default ContentViewer;