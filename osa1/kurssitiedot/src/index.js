import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>
    {props.headertext}
    </h1>
  )
}

//Contentiin voisi välittää vain listan jossa kaikki kurssitiedot?
const Content = (props) => {
  return (
    <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

// Ajattelin välittää Totaliin vain yhtenä propsina arrayn, joka sisältää
// kaikki osioiden harjoitusten määrät, mutta en lähde nyt keulimaan
// jos koodia ollaan kuitenkin refaktoroimassa myöhemmissä harjoituksissa.
const Total = (props) => {
  return (
    <p>
      Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  )
}

const App = () => {
  const course = 'Half stack application development'
  const parts = [
    { 
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header headertext={course}/>
      <Content parts={parts} />
      <Total parts={parts}/>
    </div>
  )
}

ReactDOM.render( <App />, document.getElementById('root'))