import React, { useState } from 'react'
import Proop from './Proop'

const App = () => {
  const [ni, setNi] = useState(0);
  const av = () => {
    setNi(ni + 1);
  }
  return (
    <div>
      <Proop name="keval" age="25" /><br />
      <h1>{ni}</h1><br />
      <button onClick={() => { av() }}>Submit</button>
    </div>
  )
}

export default App;
