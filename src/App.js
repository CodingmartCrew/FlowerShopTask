import { useState } from 'react';
import './App.scss';
import Login from './components/login';
import NotFound from './components/NotFound';
import TrackOrder from './components/TrackOrder';
import notfound from './assets/noimage.png';
import ProductImage from './components/ProductImage';

function App() {
  const [track, setTrack] = useState(false)
  return (
    <div>
      <div className="text-center">
        <h1 className="h1 ">Hello world</h1>
        <div>
          <button onClick={()=>{
            setTrack(true)
          }}
          >track order</button>
          <button onClick={()=>{
            setTrack(false)
          }}
          >Login</button>
        </div>
      </div>
      <ProductImage img="sample.png" notFound={notfound} />
      <NotFound />
      {!track?<Login />:<TrackOrder />}
    </div>
  );
}

export default App;
