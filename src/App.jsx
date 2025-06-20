
import { useState } from 'react';
import './App.css';
import search from './assets/icons/search.jpg';
import { useStateContext } from './Context';
import { BackGroundLayout, WeatherCard, MiniCard } from './component';


function App() {
 const [input, setInput] = useState('');
 const { weather, thisLocation, values, place, setPlace } = useStateContext();

const submitCity = () => {
   setPlace(input);
   setInput('');
   };

 return (
 <div className="w-full min-h-screen bg-cover bg-center relative text-white">

  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

   <div className="relative z-10 px-8">
     <BackGroundLayout />
    <nav className='w-full p-3 flex justify-between items-center'>
     <h1 className='font-bold tracking-wide text-3xl'>Weather App</h1>
      <div className='w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'> 
       <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' />
       <input
        type="text"
        placeholder='Search city'
        className='focus:outline-none w-full text-[#212121] text-lg'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={(e) => {
           if (e.key === 'Enter') {
              submitCity();
             }
  }}
/>
</div>
               </nav>
            </div>



        <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center relative z-10'>
        <WeatherCard
          place={thisLocation}
           windspeed={weather.wspd}
           humidity={weather.humidity}
           temperature={weather.temp}
           heatIndex={weather.heatindex}
           iconString={weather.conditions}
           conditions={weather.conditions}
 />

          <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
           {values?.slice(1, 7).map(curr => (
             <MiniCard
             key={curr.datetime}
             time={curr.datetime}
               temp={curr.temp}
        iconString={curr.conditions}
 />
))}
          </div>
</main>
    </div>
 );
}

export default App;