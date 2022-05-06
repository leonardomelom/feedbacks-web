import { useState } from "react"
import bugImg from "../../assets/Bug.png"
import ideaImg from "../../assets/Idea.svg"
import thoughtImg from "../../assets/Thought.png"
import FeedBackType from "./steps/FeedBackTypeStep"
import {FeedBackContent} from './steps/FeedBackContentStep'
import { FeedBackSucessStep } from "./steps/FeedBackSucessStep"

export const feedbackTypes ={
  BUG:{
    title: 'Problema',
    image:{
      source: bugImg,
      alt: 'problema'
    }  
  },
  IDEA:{  
    title: 'Ideia',
    image:{
      source: ideaImg,
      alt: 'ideia'
    }  
  },
  OTHER:{  
    title: 'Outro',
    image:{
      source: thoughtImg,
      alt: 'pensamento'
    }  
  }
}


export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm(){
const [ feedbackType, setFeedbackType ] = useState<FeedbackType | null>(null)
const[ feedbackSent, setFeedbackSent] = useState(false)

function handleRestartFeedback(){
  setFeedbackSent(false)
  setFeedbackType(null)
}
  return(

    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

     {feedbackSent ? (
       <FeedBackSucessStep onFeedbackRestartRequested={handleRestartFeedback}/>
     ) : (
       <>
         {!feedbackType ? (
         <FeedBackType onFeedBackTypeChanged={setFeedbackType}/>
       ) : (
        <FeedBackContent feedbackType={feedbackType} 
        onFedbackRestartRequested={handleRestartFeedback}
        onFeedbackSent ={()=>setFeedbackSent(true)}/>
       )}
       </>
     )}
      <footer className="text-xs text-neutral-400">
      Feito com ♥ pela <a className="underline underline-offset-2" href="#" >Rocketseat</a> 
      </footer>
    </div>
  
  )
}