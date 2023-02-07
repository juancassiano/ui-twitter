import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import './Tweet.css';

export function Tweet(){
  return(
    <a href="#" className="tweet">
      <img src="https://github.com/juancassiano.png" alt="Juan Cassiano" />

      <div className="tweet-content">
        <div className="tweet-content header">
          <strong>Juan Cassiano</strong>
          <span>@jcassiano</span>
        </div>

        <p>Estou iniciando meus estudos em React através dessa aplicação, por meio
          da masterclass da Rocketseat! Super recomendo.
        </p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>

          <button type="button">
            <ArrowsClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </a>
  )
}