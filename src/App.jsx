import { useState, useEffect } from 'react'

import './App.css'

const App = () => {
  const getDaysRemaining = () => {
    const currentDate = new Date();

    const targetDate = new Date('January 01, 2024 00:00:00');

    // time diff in milliseconds
    const timeDifference = targetDate - currentDate;

    // Calculate the number of days left
    const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysLeft;
  }


  const [days, setDays] = useState(getDaysRemaining())



  useEffect(() => {

    const interval = setInterval(() => {
      if (days > 1) {
        setDays(getDaysRemaining())
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [days])




  return (
    <>
      <div className="text-center">
        <h1 className="display-1">{days}</h1>
        <p className='lead'>
          {days === 1 ? 'Day' : 'Days'} Left in 2023
        </p>
      </div>

    </>
  )
}

export default App
