import React from 'react';

function Score({number}) {
    return (
        <div
            style={{display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
            <p style={{fontSize: '20px', margin: '0'}}>SCORE</p>
            <p style={{fontSize: '20px', margin: '0'}}> {number}</p>
        </div>
    )

}

export {Score}