import { useState } from 'react'


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [positive, setpositive] = useState(0)
  const {negative, setnegative} = useState(0)
  

  const [good, setGood] = useState(0)
  const increasegoodByOne = () => {
    
    setGood(good + 1)
    setpositive(positive + 1)

  }
  const [neutral, setNeutral] = useState(0)
  const increaseNeutralByOne = () => {
   
    setNeutral(neutral + 1)
    
  }
  const [bad, setBad] = useState(0)
  const increasebadByOne = () => {
    setBad(bad + 1)
    setnegative(negative + 1)
  }
  const all = good + neutral + bad
  const positive1 = good / all
  const average = (good - bad) / all

  return (
    <div>
      <h1>Give feedback</h1>
  
    <Button
      handleClick={increasegoodByOne}
      text='good'
    />
    <Button
      handleClick={increaseNeutralByOne}
      text='neutral'
    />     
    <Button
      handleClick={increasebadByOne}
      text='bad'
    />           

    <h1>statistics</h1>

    <div>good {good}</div>
    <div>neutral {neutral}</div>
    <div>bad {bad}</div>
    <div>all {all}</div>
    <div>average {average}</div>

    <div>positive {positive1}</div>



  </div>
  )
}

export default App