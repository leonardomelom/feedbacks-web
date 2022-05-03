import { useState } from 'react'

interface ButtonProps {
  text?: string;
}
 function Btn(props: ButtonProps) {

    return (
      <button className="bg-violet-600 py-2 px-4 rounded h-10 hover:bg-violet-800 transition-colors">{props.text}</button>
    )
  }

function App() {
  return (
    <div className='flex gap-2'>
       <Btn text="Enviar" />
       <Btn text="Send" />
    </div>
    ) 
}

export default App
