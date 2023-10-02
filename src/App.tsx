import React from 'react';
import './App.css';
import Search from './components/Search';

function App() {

    return (
        <div >
        <h3 className="metaphor-font">Metaphor</h3> 
            <div className="centered-content">
                <h1 className="textFont-style">Summarize your news!</h1>
         <h3 className="textFont-style">Get news from all leading sources at one place</h3>
            <Search />
        </div>
        </div>
    );
}

export default App;
