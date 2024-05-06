import {useState} from "react";
import Persons from "./components/Persons.jsx";
import SearchFilter from "./components/SearchFilter.jsx";
import PersonForm from "./components/PersonForm.jsx";

function App() {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456', id: 1},
        {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
        {name: 'Dan Abramov', number: '12-43-234345', id: 3},
        {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
    ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [search, setSearch] = useState('')
    const [searchPersons, setSearchPersons] = useState(persons)

    function handleNameChange(event) {
        setNewName(event.target.value)
    }

    function handleNumberChange(event) {
        setNewNumber(event.target.value)
    }

    function handleSearchChange(event) {
        const searchString = event.target.value
        const matchingPersons = persons.filter(peson => peson.name.toLowerCase().includes(searchString))
        setSearch(searchString)
        setSearchPersons(matchingPersons)
    }

    function handleFromSubmit(event) {
        event.preventDefault()
        if (persons.find(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
            return;
        }
        setPersons(persons.concat({name: newName, number: newNumber, id: persons.length + 1}))
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <SearchFilter value={search} handleSearchChange={handleSearchChange}/>
            <PersonForm nameValue={newName} handleNameChange={handleNameChange}
                        numberValue={newNumber} handleNumberChange={handleNumberChange}
                        handleFromSubmit={handleFromSubmit}/>
            <Persons persons={search === '' ? persons : searchPersons}/>
        </div>
    )
}

export default App
