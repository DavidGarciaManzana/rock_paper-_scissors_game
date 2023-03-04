import React from 'react';
import {PlayButton} from "./PlayButton";
function ScissorsButton({handleButtonPicked}) {
    return (
        <PlayButton handleButtonPicked={handleButtonPicked} color={'yellow'} url={'media/icon-scissors.svg'} description={'An image of a hand simulating a scissors'} valueHtml={'scissors'}></PlayButton>
    )
}

export {ScissorsButton}