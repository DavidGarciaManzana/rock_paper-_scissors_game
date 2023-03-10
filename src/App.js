import React from 'react';
import './App.css';
import {Banner} from "./Banner";
import {Game} from "./Game";

function App() {
    const [scoreNumber, setScoreNumber] = React.useState(0);

    function handleScoreNumber(value) {
        setScoreNumber(scoreNumber + value)
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
            order: '1px solid black',
            border: '1px solid aqua', height: '100vh'
        }}>
            <Banner scoreNumber={scoreNumber}/>
            <Game handleScoreNumber={handleScoreNumber} />
        </div>
    );
}

export default App;
