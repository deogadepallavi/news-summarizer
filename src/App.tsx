import React from 'react';
import './App.css';
import Search from './components/Search';

function App() {

    return (
        <div >
        <h3 className="metaphor-font">Metaphor</h3> 
            <div className="centered-content">
            <h1>Search Anything!</h1>
            <Search />
        </div>
        </div>
    );
}

export default App;
