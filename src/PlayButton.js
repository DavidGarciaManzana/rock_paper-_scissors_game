import React from 'react';

function PlayButton({color, url, description, handleButtonPicked, valueHtml, widthImage}) {
    return (
        <button style={{borderRadius: '50%', width: '10rem', height: '10rem', border: `10px solid ${color}`}}
                onClick={() => {
                    handleButtonPicked(valueHtml)
                }}>
            <img style={{width: widthImage || '120'}} src={url} alt={description}/>
        </button>
    )
}

export {PlayButton}