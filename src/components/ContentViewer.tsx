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
            {props.documents.map((document) => (
                <div key={document.id} className="document">
                    <h2 className="textFont-style">{document.title}</h2>
                    <p className="textFont-style">
                        <h4>URL:</h4>{' '}
                        <a href={document.url} target="_blank" rel="noopener noreferrer">
                            {document.url}
                        </a>
                    </p>
                    <p className="textFont-style">
                        <h4>Summary:</h4> {extractParagraphContent(document.extract)}
                    </p>
                    <button type="button" className={"backButton-style"} onClick={() => props.onBackClick(true)}>Back</button>

                </div>
            ))}
        </div>
    );
}

export default ContentViewer;