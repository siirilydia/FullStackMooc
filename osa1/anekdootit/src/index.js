import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(props.anecdotes.length)).map(Number.prototype.valueOf,0))
  const copy = [ ...points]
  
  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
    console.log(selected)
  } 
  
  const addVote = () => {
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      {props.anecdotes[selected]}
      <br/>
      has {points[selected]} votes
      <br/>
      <button onClick={() => addVote()}>vote</button>
      <button onClick={() => randomAnecdote()}>next anecdote</button>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
)