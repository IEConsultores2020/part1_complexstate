import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = (props) => {
  const[good, setGood] = useState(0)
  const[neutral, setNeutral] = useState(0)
  const[bad, setBad] = useState(0)
  const[selected, setSelected] = useState(0)
  const[vote, setVote] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0})
  const[maxi, setMaxi] = useState(0)

  const setToVote = () => {
    const copy = {...vote}
    copy[selected] += 1
    setVote(copy) 

    if (vote[maxi] <= vote[selected])
     setMaxi(selected)
  }


  const setToGood = ()  => {
    setGood(good + 1)
  }

  const setToNeutral = ()  => {
    setNeutral(neutral + 1)
  }

  const setToBad = ()  => {
    setBad(bad + 1)
  }

  const Statistics = (props) => {
    return <h2>Average, {props.average} </h2>
  }

  const setToSelected = () => {
     setSelected(Math.floor((Math.random() * 6)))
  }

  return (
  <div>
    <h4>{anecdotes[selected]} </h4>
    <h4>Votes: {vote[selected]} Selected:{selected} PosMaxi:{maxi} </h4>
    <h4>Anecdote with more votes: {anecdotes[maxi]} with {vote[maxi]} votes</h4>
    <Button handleClick={setToSelected} text="Next anecdote" />   
    <Button handleClick={setToVote} text="Vote" />
    <h1>Give Feedback </h1>
      <Button handleClick={setToGood} text="good" /> 
      <Button handleClick={setToNeutral} text="neutral" />  
      <Button handleClick={setToBad} text="bad" />    
   <h1>Statistics </h1>
    <h2>Good {good} </h2>
    <h2>Neutral {neutral} </h2>
    <h2>Bad {bad} </h2>
    <h2>All {good + neutral + bad} </h2>
    <Statistics average={ (good - bad) / (good + neutral + bad)  } />
    <h2>Positive { good / (good + neutral + bad) * 100} % </h2>
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
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
  )
