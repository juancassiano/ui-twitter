import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css';

export function Status(){

  const [newAnswer, setNewAnswer] = useState('');

  const [answers, setAnswers] = useState([
    "Concordo",
    "Faz sentido"
  ]);
    
  
    function createNewAnswers(event: FormEvent){
      event.preventDefault();
  
      setAnswers([...answers, newAnswer]);
      setNewAnswer('');
    }

    function handleHotKeySubmit(event: KeyboardEvent){
      if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
        setAnswers([...answers, newAnswer]);
        setNewAnswer('');
      }
    }

  return(
    <main className="status">

    <Header title='Tweet'/>
    <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dignissimos harum libero maiores alias voluptatem est ut quos dolore sequi tempora aut officia numquam, excepturi non corrupti. Sit, nisi? Natus?
    "/>

    <Separator />

    <form onSubmit={createNewAnswers} className="answer-tweet-form">
      <label htmlFor="tweet">
        <img src="https://github.com/juancassiano.png" alt="Juan Cassiano" />
        <textarea 
          id="tweet" 
          placeholder="Tweet your answer?" 
          value={newAnswer}
          onKeyDown={handleHotKeySubmit}
          onChange={(event) => {
            setNewAnswer(event.target.value)
          }}
        />
      </label>

      <button type='submit'>
        <PaperPlaneRight />
        <span>Answer</span>
      </button>
    </form>


    {answers.map(answer =>{
      return <Tweet key={answer} content={answer} />
    })}
</main>
  )
}