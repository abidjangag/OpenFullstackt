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
