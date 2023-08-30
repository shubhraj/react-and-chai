import { useState } from 'react'


function App() {
  const [color, setColor] = useState('olive');

  return (
    <div className='w-screen h-screen duration-200'
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center inset-x-0 px-2 py-2 bottom-0 w-full'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg'>
              <button className='font-bold py-2 px-4 rounded text-white' style={{backgroundColor: "red"}} onClick={() => setColor('red')}> Red </button>
              <button className='font-bold py-2 px-4 rounded text-white' style={{backgroundColor: "green"}} onClick={() => setColor('green')}> Green </button>
              <button className='font-bold py-2 px-4 rounded text-white' style={{backgroundColor: "blue"}} onClick={() => setColor('blue')}> Blue </button>
          </div>  
      </div>  
      
    </div>
  )
}

export default App
