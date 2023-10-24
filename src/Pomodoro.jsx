import 'materialize-css/dist/css/materialize.min.css';

import React, { useState, useEffect } from 'react';

export function Pomodoro() {
    //Define state variables for the timer
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [timerType, setTimerType] = useState('Pomodoro');
    const [isBreak, setIsBreak] = useState(false);
    const [pomodorosCompleted, setPomodorosCompleted] = useState(0);
    //Update the timer every second
    useEffect(() => {
        let timer = null;
        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
            }, 1000);
            //When timer reaches zero, reset it and switch to break mode    
        } else if (timeLeft === 0) {
            setPomodorosCompleted(prevPomodoros => prevPomodoros + 1);
            setIsRunning(false);
            setIsBreak((prevIsBreak) => !prevIsBreak);

            if (isBreak) {
                setTimeLeft(25 * 60);
            } else {
                setTimeLeft(15 * 60);
            }

            if (timerType === 'Pomodoro') {
                setTimeLeft(5 * 60);
                setTimerType('break');
            } else {
                setTimeLeft(25 * 60);
                setTimerType('Pomodoro');
            }
        }

        return () => clearInterval(timer);
    }, [isRunning, timeLeft, isBreak, timerType, pomodorosCompleted]);
    //Start the timer
    function startTimer() {
        setIsRunning(true);
    }
    //Stop the timer
    const stopTimer = () => {
        setIsRunning(false);
    };
    //Reset the timer
    const resetTimer = () => {
        setIsRunning(false);
        setIsBreak(false);
        setTimerType('Pomodoro');
        setTimeLeft(25 * 60);
        setPomodorosCompleted(0);
    };
    // Format the remaining time as minutes and seconds
    const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const seconds = (timeLeft % 60).toString().padStart(2, '0');

    return (

        <div className='Pomodoro'>
            <div className="row center-align">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Pomodoro Timer</span>
                            <div className='timer'>
                                <span className='minutes'>{minutes}</span>
                                <span>:</span>
                                <span className='seconds'>{seconds}</span>
                            </div>
                            <div>{pomodorosCompleted}</div>
                        </div>
                        <div className="card-action btn-spacing">
                            {/*{!isRunning && (<button onClick={startTimer}>Start</button>)}*/}
                            {/*{isRunning && (<button onClick={stopTimer}>Stop</button>)}*/}
                            <button onClick={startTimer} className='btn'>Start</button>
                            <button onClick={stopTimer} className='btn'>Pause</button>
                            <button onClick={resetTimer} className='btn'>Reset</button>

                            {/*Display the current status of the timer*/}
                            {isBreak ? (<div className='Status'>On Break</div>) : (<div className='Status'>Focusing</div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}


export default Pomodoro;