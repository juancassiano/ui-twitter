import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css';


const answers = [
  'Concordo',
  'Faz sentido',
  'Parabéns'
]
export function Status(){
  return(
    <main className="status">

    <Header title='Tweet'/>
    <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dignissimos harum libero maiores alias voluptatem est ut quos dolore sequi tempora aut officia numquam, excepturi non corrupti. Sit, nisi? Natus?
    "/>

    <Separator />

    <form action="" className="answer-tweet-form">
      <label htmlFor="tweet">
        <img src="https://github.com/juancassiano.png" alt="Juan Cassiano" />
        <textarea id="tweet" placeholder="Tweet your answer?" />
      </label>

      <button type='submit'>Answer</button>
    </form>


    {answers.map(answer =>{
      return <Tweet key={answer} content={answer} />
    })}
</main>
  )
}