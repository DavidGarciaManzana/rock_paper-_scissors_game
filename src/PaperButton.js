import React from 'react';
import {PlayButton} from "./PlayButton";
function PaperButton({handleButtonPicked}) {
    return (
        <PlayButton handleButtonPicked={handleButtonPicked} color={'blue'} url={'media/icon-paper.svg'} description={'An image of a hand simulating a paper'} valueHtml={'paper'}></PlayButton>
    )
}

export {PaperButton}