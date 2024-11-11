import { useState, useEffect } from 'react';

function LiveClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Clear the interval on component unmount
  }, []);

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-5'>Check inn Date and Time</h2>
      <p className='text-red-500 text-xl font-sans'>{currentTime.toLocaleString()}</p>
    </div>
  );
}

export default LiveClock;
