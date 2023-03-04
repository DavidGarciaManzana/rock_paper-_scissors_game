import React from 'react';

function ResultBanner({setGameStatus, setButtonPicked, setHousePicked, setEndGame, children}) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: "center"}}>
            <p style={{fontSize: '35px', margin: '0'}}>{`You ${children}`}</p>
            <button style={{
                backgroundColor: '#4CAF50',
                border: 'none',
                color: 'white',
                padding: '15px 32px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '16px',
                margin: '4px 2px',
                cursor: 'pointer',
            }}
                    onClick={() => {
                        setGameStatus('initial')
                        setButtonPicked('')
                        setHousePicked('')
                        setEndGame('')
                    }}> Play Again
            </button>
        </div>
    )

}

export {ResultBanner}