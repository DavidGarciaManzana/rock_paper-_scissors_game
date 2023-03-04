import React from 'react';
import {RockButton} from "./RockButton";
import {PaperButton} from "./PaperButton";
import {ScissorsButton} from "./ScissorsButton";
import {WaitButton} from "./WaitButton";
import {ResultBanner} from "./ResultBanner";

let houseComponent;

function Game({scoreNumber, handleScoreNumber}) {
    const [gameStatus, setGameStatus] = React.useState('initial');
    const [buttonPicked, setButtonPicked] = React.useState('');
    const [housePicked, setHousePicked] = React.useState('');
    const [endGame, setEndGame] = React.useState('');


    function handleButtonPicked(value) {
        let userPicked = value
        setButtonPicked(userPicked)
        setGameStatus('user-picked')

        function handleHousePicked() {
            setHousePicked('picked');
        }

        setTimeout(handleHousePicked, 1000);

        let randomNumber = Math.floor(Math.random() * (3) + 1)
        let houseValue;
        if (randomNumber === 1) {
            houseValue = 'rock'
            houseComponent = <RockButton/>
        } else if (randomNumber === 2) {
            houseValue = 'paper'
            houseComponent = <PaperButton/>
        } else {
            houseValue = 'scissors'
            houseComponent = <ScissorsButton/>
        }

        if (userPicked === houseValue) {
            setEndGame('draw')
        } else if (
            (userPicked === 'rock' && houseValue === 'scissors') ||
            (userPicked === 'paper' && houseValue === 'rock') ||
            (userPicked === 'scissors' && houseValue === 'paper')
        ) {
            setEndGame('win');

            function handleScore() {
                handleScoreNumber(scoreNumber + 1)
            }

            setTimeout(handleScore, 1000);


        } else if (
            (userPicked === 'rock' && houseValue === 'paper') ||
            (userPicked === 'paper' && houseValue === 'scissors') ||
            (userPicked === 'scissors' && houseValue === 'rock')
        ) {
            setEndGame('lose');

            function handleScore() {
                handleScoreNumber(scoreNumber - 1)
            }

            setTimeout(handleScore, 1000);
        } else {
            window.alert('Something is wrong')
        }

    }


    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center', maxWidth: '100%', width: '30rem', height: '30rem'
        }}>
            {gameStatus === 'initial' && (
                <>
                    <RockButton handleButtonPicked={handleButtonPicked}/>
                    <PaperButton handleButtonPicked={handleButtonPicked}/>
                    <ScissorsButton handleButtonPicked={handleButtonPicked}/>
                </>
            )}
            {buttonPicked === 'rock' && housePicked === '' && (<><RockButton/><WaitButton/></>)}
            {buttonPicked === 'paper' && housePicked === '' && (<><PaperButton/><WaitButton/></>)}
            {buttonPicked === 'scissors' && housePicked === '' && (<><ScissorsButton/><WaitButton/></>)}

            {buttonPicked === 'rock' && housePicked === 'picked' && (
                <>
                    <RockButton/>
                    <ResultBanner setGameStatus={setGameStatus} setButtonPicked={setButtonPicked}
                                  setHousePicked={setHousePicked} setEndGame={setEndGame} children={endGame}/>
                    {houseComponent}
                </>
            )}
            {buttonPicked === 'paper' && housePicked === 'picked' && (
                <>
                    <PaperButton/>
                    <ResultBanner setGameStatus={setGameStatus} setButtonPicked={setButtonPicked}
                                  setHousePicked={setHousePicked} setEndGame={setEndGame} children={endGame}/>
                    {houseComponent}
                </>
            )}
            {buttonPicked === 'scissors' && housePicked === 'picked' && (
                <>
                    <ScissorsButton/>
                    <ResultBanner setGameStatus={setGameStatus} setButtonPicked={setButtonPicked}
                                  setHousePicked={setHousePicked} setEndGame={setEndGame} children={endGame}/>
                    {houseComponent}
                </>
            )}

        </div>
    )
}

export {Game}