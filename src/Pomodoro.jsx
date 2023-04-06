import React, {useState, useEffect} from 'react';



    
function Pomodoro() {
    const [timeLeft, setTimeLeft] = useState(25*60);
    const [isRunning, setIsRunning] = useState(false);
    const [timerType, setTimerType] = useState('Pomodoro');
    const [pomodorosCompleted, setPomodorosCompleted] = useState(0);

    useEffect(() => {
        let timer = null;
        if (isRunning && timeLeft > 0){
            timer = setInterval(() => {
                setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0){
            setPomodorosCompleted(prevPomodoros => prevPomodoros + 1);
            setIsRunning(false);

            if (timerType === 'Pomodoro'){
                setTimeLeft(5*60);
                setTimerType('break');
            } else {
                setTimeLeft(25*60);
                setTimerType('Pomodoro')
            }
        }

        return () => clearInterval(timer);
    }, [isRunning, timeLeft, timerType]);

    function startTimer() {
        setIsRunning(true);
    }
    const stopTimer = () => {
        setIsRunning(false);
    };
    const resetTimer = () => {
        setIsRunning(false);
        setTimerType('Pomodoro');
        setTimeLeft(25*60);
        setPomodorosCompleted(0);
    };

    const minutes = Math.floor(timeLeft/60).toString().padStart(2,'0');
    const seconds = (timeLeft%60).toString().padStart(2,'0');

    return(
        <div className='Pomodoro'>
            <h1>Pomodoro Timer</h1>
            <div className='timer'>
                <span className='minutes'>{minutes}</span>
                <span>:</span>
                <span className='seconds'>{seconds}</span>
            </div>
            <div className='buttons'>
                {!isRunning && (<button onClick={startTimer}>Start</button>)}
                {isRunning && (<button onClick={stopTimer}>Stop</button>)}
            </div>
        </div>
    );
}

export default Pomodoro;