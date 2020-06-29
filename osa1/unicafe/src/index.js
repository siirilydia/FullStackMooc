import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)
  
const Statistics = (props) => {
    
  const average = () => {
    let total = 0

    props.allRatings.forEach(rating => {
      total += rating
    })

    return (
      total/props.allRatings.length
    )
  }
      
  const goodReviews = () => {
    let goodAmount = 0

    props.allRatings.forEach(rating => {
      if (rating === 1){
        goodAmount++
      }
    })

    return goodAmount/props.allRatings.length*100
  }
      
  if (props.allRatings.length === 0) {
    return (
      <div>
        <br/>No feedback given
      </div>
    )
  }

  return(
    <div>
      <h1>statistics</h1>
      good {props.good}
      <br/>neutral {props.neutral}
      <br/>bad {props.bad}
      <br/>all {props.allRatings.length}
      <br/>average {average()}
      <br/>positive {goodReviews()}%
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allRatings, setRating] = useState([])
  
  
  const handleGoodClick = () => {
    setGood(good +1 )
    setRating(allRatings.concat(1))
  }

  const handleNeutralClick = () => {
    setNeutral(neutral +1 )
    setRating(allRatings.concat(0))
  }
  
  const handleBadClick = () => {
    setBad(bad +1 )
    setRating(allRatings.concat(-1))
  }
  
  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => handleGoodClick()} text="good" />
      <Button handleClick={() => handleNeutralClick()} text="neutral" />
      <Button handleClick={() => handleBadClick()} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} allRatings={allRatings}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))