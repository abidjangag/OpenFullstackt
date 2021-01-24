import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({titre,handle}) => {
  return(
    <div>
        <button onClick={handle}>{titre}</button>
    </div>
  )
}


const App = () => {

  const [vote,setVote]=useState(0)
  const [i,setI]=useState(0)
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const handleVote=()=>{
    setVote(vote+1)
  }
  const handleI=()=>{
    setI(i+1)
  }

  return (
    <div>
      {anecdotes[i]}
        <Button titre="Vote" handle={handleVote}/>
        <Button titre="Next anecdote"handle={handleI}/>
    </div>
  )
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)