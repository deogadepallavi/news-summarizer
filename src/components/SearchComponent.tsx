import React from "react";

export function SearchComponent(props: {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onClick: () => Promise<void>
}) {
    return <div className="search-container">
        <input
            type="text"
            placeholder="Search..."
            value={props.value}
            onChange={props.onChange}
            className="search-input form-control" 
        />
        <button onClick={props.onClick} className="search-button" disabled={props.value.trim() === ""}>
            Go
        </button>
        {props.value.trim() === "" && (
      <p className="textFont-style">Please enter some text</p>
    )}
    </div>;
}