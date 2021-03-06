import { useState, useEffect } from 'react'
import CountdownItem from './CountdownItem'

type Count = {
  name: 'Days' | 'Hours' | 'Minutes' | 'Seconds'
  time: number
}

type CountProps = {
  className?: string
}

const Countdown = ({ className = '' }: CountProps) => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear()

    const diference = +new Date(`03/24/${year}`) - +new Date()

    let timeLeft: Array<Count> = []

    timeLeft = [
      {
        name: 'Days',
        time: diference > 0 ? Math.floor(diference / (1000 * 60 * 60 * 24)) : 0,
      },
      {
        name: 'Hours',
        time: diference > 0 ? Math.floor((diference / (1000 * 60 * 60)) % 24) : 0,
      },
      {
        name: 'Minutes',
        time: diference > 0 ? Math.floor((diference / 1000 / 60) % 60) : 0,
      },
      {
        name: 'Seconds',
        time: diference > 0 ? Math.floor((diference / 1000) % 60) : 0,
      },
    ]
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearTimeout(timer)
  })

  return (
    <div
      className={`mt-14 flex justify-between rounded-2xl bg-white px-4 py-3 md:mt-0 md:px-12 md:py-6 ${className}`}
    >
      {timeLeft.map(
        (time, i) =>
          time && (
            <CountdownItem
              time={time.time}
              type={time.name}
              key={`${i}-time`}
            />
          )
      )}
    </div>
  )
}

export default Countdown
