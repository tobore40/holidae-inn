
import  { useState } from 'react';
import CheckInForm from './components/CheckInForm';
import CheckInList from './components/CheckInList';
import LiveClock from './components/LiveClock';

function App() {
  const [checkIns, setCheckIns] = useState([]);

  const addCheckIn = (checkIn) => {
    setCheckIns([...checkIns, checkIn]);
  };

  return (
    <div>
      <div className="px-4 py-3">
        <img className='w-[100vw] h-[400px] object-cover' src="https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/jgmd3avzvknw0mzojgvn" alt="" />
      </div>
      
      <h1 className='mt-7 text-center text-5xl font-semibold'>EmekaTech Holidae Inn</h1>
      <div className="flex justify-between mt-9 border border-gray-600 rounded-md  mx-10 p-8">
        <div className="border-r-4 pr-7">
        <CheckInForm addCheckIn={addCheckIn} />
        </div>
        <div className="gap-y-10">
          <LiveClock />
          <div className="mt-10">
          <CheckInList checkIns={checkIns} />
          </div>
        
        </div>

      </div>
      
      
    </div>
  );
}

export default App;

