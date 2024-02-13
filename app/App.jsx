'use client';


import EarthCanvas from './components/EarthCanvas';
import AnimatedPizza from './components/AnimatedPizza';





function App() {
  return(
    <div className="flex flex-col justify-center text-center">
      <div className="grid grid-cols-1 py-6 "> 
        <EarthCanvas/>
      </div>
      <div className="pb-6">
        <AnimatedPizza/>
      </div>
      <div className="p-6 select-none mx-auto lg:mx-72 my-2 shadow-lg rounded-lg">
          <p className='mb-2'> Earth autorotation. Just 3d model, autorotating.</p>
          <p> Pizza.jpg. Photo shaped into sphere. 
          After autorotation stoped you can rotate with mouse.</p>
        </div>

        <div className="text-center text-gray-600 mt-2">
        © Pandario 2024
      </div>
    </div>
  )
}
export default App;
