import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>
    {props.headertext}
    </h1>
  )
}

const Content = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

// Ajattelin välittää Totaliin vain yhtenä propsina arrayn, joka sisältää
// kaikki osioiden harjoitusten määrät, mutta en lähde nyt keulimaan
// jos koodia ollaan kuitenkin refaktoroimassa myöhemmissä harjoituksissa.

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.exc1+props.exc2+props.exc3}
    </p>
  )
}

const App = () => {
  const course = 'Half stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of component'
  const exercises3 = 14

  return (
    <div>
      <Header headertext={course}/>
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total exc1={exercises1} exc2={exercises2} exc3={exercises3}/>
    </div>
  )
}

ReactDOM.render( <App />, document.getElementById('root'))