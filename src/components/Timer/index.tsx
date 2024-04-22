import { FC, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from './timer.module.css';

function convertSecondsToTime(time: number) {
  const minutes = Math.floor(time / 60)
  const seconds = time - minutes * 60

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

type StorageTimer = {
  time: number
}

function getTimeFromStorage(): StorageTimer | null {
  const oldTimer = localStorage.getItem('timer')
  if (oldTimer) return JSON.parse(oldTimer) as StorageTimer
  return null
}

export const Timer: FC = () => {
  const [time, setTime] = useState(getTimeFromStorage()?.time || 60 * 20)
  const timerId = useRef(0)

  const navigate = useNavigate()

  useEffect(() => {
    timerId.current = setTimeout(() => {
      if (time <= 0) {
        localStorage.removeItem('timer')
        navigate('/results')
      }
      localStorage.setItem('timer', JSON.stringify({ time: time - 1 }))
      setTime(prev => prev - 1)
    }, 1000)

    return () => {
      clearTimeout(timerId.current)
    }
  }, [navigate, time])

  return <div className={styles.timer}>
    <h3>{convertSecondsToTime(time)}</h3>
  </div>
}