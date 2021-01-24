import React, { useState, useRef } from 'react'
import './Pomodoro.css';

const padTime = time => time.toString().padStart(2, '0') //Adds a '0' when the number has less tahn 2 digits (helper function)


export default function PomodoroApp() {

    //Initial state declarations
    const [title, setTitle] = useState('Let the countdown begin!')
    const [timeLeft, setTimeLeft] = useState(25 * 60)
    const [isRunning, setIsRunning] = useState(false)
    const interval = useRef(null)


    //Functions
    const startTimer = () => {

        if (interval.current !== null) return

        interval.current = setInterval(() => {
            setTimeLeft(timeLeft => timeLeft >= 1 ? timeLeft - 1 : restTime())
            setTitle("Let's go!")
            setIsRunning(true)
        }, 1000)
    }

    const restTime = () => {

        clearInterval(interval.current)
        interval.current = null

        setTimeLeft(5 * 60)
        startRest()
    }

    const prepareStart = () => {
        clearInterval(interval.current)
        interval.current = null

        setTimeLeft(25 * 60)
        startTimer()
    }

    const startRest = () => {
        if (interval.current !== null) return

        interval.current = setInterval(() => {
            setTitle('Good job! Time to rest for 5 min.')
            setIsRunning(true)
            setTimeLeft(timeLeft => timeLeft >= 1 ? timeLeft - 1 : prepareStart())
        }, 1000)
    }

    const stopTimer = () => {

        if (interval.current === null) return

        clearInterval(interval.current)
        interval.current = null
        setTitle('Keep it up!')
        setIsRunning(false)
    }

    const resetTimer = () => {
        clearInterval(interval.current)
        interval.current = null
        setTimeLeft(25 * 60)
        setTitle('Ready to go another round?')
        setIsRunning(false)
    }

    //Initial variables
    const minutes = padTime(Math.floor(timeLeft / 60))
    const seconds = padTime(timeLeft - minutes * 60)


    return (
        <div className="pomodoro-app">
            <h2>{title}</h2>

            <section className='timer'>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
            </section>

            <section className='buttons'>
                {!isRunning ?
                    <button onClick={startTimer}>Start</button>
                    :
                    <button onClick={stopTimer}>Stop</button>
                }
                <button onClick={resetTimer}>Reset</button>
            </section>
        </div>
    );
}
