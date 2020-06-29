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
  const [allRatings, setRating] = useState([])
  
  const average = () => {
    let total = 0
    allRatings.forEach(rating => {
      total += rating
    })
    return (
       total/allRatings.length
      )
  }

  const goodReviews = () => {
    let goodAmount = 0
    allRatings.forEach(rating => {
      if (rating === 1){
        goodAmount++
      }
    })
    return goodAmount/allRatings.length*100
  }

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
      <h1>statistics</h1>
      good {good}
      <br/> neutral {neutral}
      <br/> bad {bad}
      <br/>all {allRatings.length}
      <br/>average {allRatings.length !== 0 ? average() : null}
      <br/>positive {allRatings.length !== 0 ? goodReviews() : null}%
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))