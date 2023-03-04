import React from 'react';
import {Score} from "./Score";

function Banner({scoreNumber}) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            minWidth: '16rem'
        }}>
            <p style={{fontSize: '20px', margin: '0'}}>ROCK PAPER SCISSORS</p>
            <Score number={scoreNumber}></Score>
        </div>
    )

}

export {Banner}