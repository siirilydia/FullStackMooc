import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  //tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // const setValue = (valueToSet, newValue) => {
  //   valueToSet(newValue)
  // }

  const handleGoodClick = () => {
    setGood(good +1 )
    console.log(good)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral +1 )
    console.log(neutral)
  }
  
  const handleBadClick = () => {
    setBad(bad +1 )
    console.log(bad)
  }
  
  
  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => handleGoodClick()} text="good" />
      <Button handleClick={() => handleNeutralClick()} text="neutral" />
      <Button handleClick={() => handleBadClick()} text="bad" />
      <h1>statistics</h1>
      <br/> good {good}
      <br/> neutral {neutral}
      <br/> bad {bad}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))