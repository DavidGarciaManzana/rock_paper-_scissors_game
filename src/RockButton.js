import React from 'react';
import {PlayButton} from "./PlayButton";
function RockButton({handleButtonPicked}) {
    return (
        <PlayButton handleButtonPicked={handleButtonPicked} color={'red'} url={'media/icon-rock.svg'} description={'An image of a hand simulating a rock'} valueHtml={'rock'}></PlayButton>
    )
}

export {RockButton}