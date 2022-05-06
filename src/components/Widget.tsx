import React from 'react';
import { ChatTeardropDots} from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from  '../components/WidgetForm/Index';

export function Widget() {
// const [isWidgetOpen, setisWidgetOpen] = useState(false)

// function toggleWidgetVisibility(){
//   setisWidgetOpen(!isWidgetOpen)
// }
  return(
   <Popover className='absolute bottom-4 right-4 md:bottom-6 md:right-6 flex flex-col items-end'>
     {/* { isWidgetOpen && <p>oi</p> } */}
      <Popover.Panel>
        <WidgetForm />
        </Popover.Panel>

      <Popover.Button  className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
      <ChatTeardropDots className='w-6 h-6'/>

      <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-600 ease-linear'>
        <span className='pl-2'></span>
        feedback</span>
    </Popover.Button>
   </Popover>
    )
}