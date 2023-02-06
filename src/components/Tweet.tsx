interface TweetProps{
  user: string
  children: string
  likes?: number
}

export function Tweet(props: TweetProps){
  return(
    <div className="tweet">
      <strong>{props.user}</strong>
      <h1>{props.children}</h1>
      <button>Like{props.likes ?? 0}</button>
    </div>
  )
}