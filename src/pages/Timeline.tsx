import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Timeline.css";


export function Timeline() {

  const [newTweet, setNewTweet] = useState('');

const [tweets, setTweets] = useState([
  "Meu primeiro tweet", 
  "Meu segundo tweet"
]);
  

  function createNewTweet(event: FormEvent){
    event.preventDefault();

    setTweets([...tweets, newTweet]);
    setNewTweet('');
  }

  function handleHotKeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setTweets([...tweets, newTweet]);
      setNewTweet('');
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/juancassiano.png" alt="Juan Cassiano" />
          <textarea 
            id="tweet" 
            placeholder="What's Happening?"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }} 
          />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
