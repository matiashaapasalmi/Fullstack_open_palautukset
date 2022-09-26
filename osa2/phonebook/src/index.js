import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const persons = [
  {
    name: 'Arto Hellas',
    id: 1 
  }
  
]
const result = persons.map(note => note.id)
console.log(result)
ReactDOM.createRoot(document.getElementById('root')).render(
  <App persons={persons} />
)