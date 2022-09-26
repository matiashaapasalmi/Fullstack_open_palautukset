import { useState } from 'react'
import Person from './components/Note'


const App = (props) => {
  const [persons, setPersons] = useState(props.notes)

  const [newName, setNewName] = useState('')

     const addnumber = (event) => {
      const numberObject = {
        name: newName,
        id: persons.length + 1
    }
    setPersons(persons.concat(numberObject))
    setNewName('')
  }
  
  const handle_event = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addnumber}>
        <div>
          name: <input value={newName}
          onChange={handle_event}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(name => 
          <Person key={persons.id} name={name} />
        )}
      </ul>
    </div>
  )

}

export default App