import { ArrowLeft, Camera } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { FeedbackType,feedbackTypes} from '../Index'
import { CloseButton } from '../../CloseButton'
import { ScreenShotButton } from '../ScreenShotButton';

  export interface FeedbackContentStepProps {
   feedbackType: FeedbackType;
    onFedbackRestartRequested: () => void;
    onFeedbackSent: () => void;
 }
 

 export  function FeedBackContent({feedbackType, onFedbackRestartRequested, onFeedbackSent}: FeedbackContentStepProps)  {
   const feedbackTypeInfo = feedbackTypes[feedbackType]
  const [ screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')

  function handleSubmitFeedback(event:FormEvent){
    event.preventDefault();
    console.log(
      screenshot, 
      comment)
      onFeedbackSent()
  }
    return (
      <>
      <header>
        <button type="button" className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100'
        onClick={onFedbackRestartRequested}>
          <ArrowLeft weight='bold' className="w-4 h-4"/>
        </button>
      <span className="text-xl leading-6 flex items-center gap-2">
        <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
        {feedbackTypeInfo.title}
      </span>
      <CloseButton />
    </header>
     <form onSubmit={handleSubmitFeedback} className='my-4 w-full'>
       <textarea 
       className='min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-1 border-zinc-600 rounded-md bg-transparent focus:border-brand-500 focus:outline-none focus:ring-brand-500 focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin' 
       placeholder='conte com detalhes o que houve'
       onChange={(event) => setComment(event.target.value)}
       
       />

       <footer className='flex gap-2 mt-2'>
         <ScreenShotButton 
         screenshot={screenshot}
         onScreenshotTook={setScreenshot} />

         <button
         disabled={comment.length === 0}
         type='submit'
         className='p-2  bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover-bg-brand-500'
         >
          Enviar Feedback
         </button>
       </footer>
     </form>
    </>
    )
}

