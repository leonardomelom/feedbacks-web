import { useState } from "react"
import { CloseButton } from "./CloseButton"
import bugImg from "../assets/Bug.png"
import ideaImg from "../assets/Idea.svg"
import thoughtImg from "../assets/Thought.png"

const feedbackTypes ={
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
type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm(){
const [ feedbackType, setFeedbackType ] = useState<FeedbackType | null>(null)
  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

        <div className="flex py-8 gap-2 w-full">
          {Object.entries(feedbackTypes).map(([key, value]) => (
          <button key={key}
          className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:bord-border-brand-500 hover:outline-none"
          onClick={() => setFeedbackType(key as FeedbackType)}
          type="button"
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
          ))}
        </div>
      <footer className="text-xs text-neutral-400">
      Feito com ♥ pela <a className="underline underline-offset-2" href="#" >Rocketseat</a> 
      </footer>
    </div>
  )
}