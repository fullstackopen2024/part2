import {useState} from "react";
import Persons from "./components/Persons.jsx";

function App() {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            number: '39-44-5323523'
        }
    ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    function handleNameChange(event) {
        setNewName(event.target.value)
    }

    function handleNumberChange(event) {
        setNewNumber(event.target.value)
    }

    function handleFromSubmit(event) {
        event.preventDefault()
        if (persons.find(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
            return;
        }
        setPersons(persons.concat({name: newName, number: newNumber}))
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleFromSubmit}>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <Persons persons={persons}/>
        </div>
    )
}

export default App
