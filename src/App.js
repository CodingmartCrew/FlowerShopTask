import { useState } from 'react';
import './App.scss';
import Login from './components/login';
import TrackOrder from './components/TrackOrder';
function App() {
  const [track, setTrack] = useState(false)
  return (
    <div className="bg-green-500">
      <h1 className="h1 text-center">Hello world</h1>
      <div className="absolute right-5">
        <button onClick={()=>{
          setTrack(true)
        }}
        >track order</button>
        <button onClick={()=>{
          setTrack(false)
        }}
        >Login</button>
      </div>
      {!track?<Login />:<TrackOrder />}
    </div>
  );
}

export default App;
