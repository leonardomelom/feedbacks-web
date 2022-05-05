import { useState } from "react"
import { CloseButton } from "../CloseButton"
import bugImg from "../../assets/Bug.png"
import ideaImg from "../../assets/Idea.svg"
import thoughtImg from "../../assets/Thought.png"
import FeedBackTypeStep from "./steps/FeedBackTypeStep"
import FeedBackContentStep from "./steps/FeedBackContentStep"

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
  return(

    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

       {!feedbackType ? (
         <FeedBackTypeStep onFeedBackTypeChanged={setFeedbackType}/>
       ) : (
        <FeedBackContentStep />
       )}
      <footer className="text-xs text-neutral-400">
      Feito com ♥ pela <a className="underline underline-offset-2" href="#" >Rocketseat</a> 
      </footer>
    </div>
  
  )
}