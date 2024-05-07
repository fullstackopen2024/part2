import {useEffect, useState} from "react";
import Persons from "./components/Persons.jsx";
import SearchFilter from "./components/SearchFilter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import axios from "axios";

function App() {
    const [persons, setPersons] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/persons").then(response => setPersons(response.data))
    }, []);

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
        const newPerson = {name: newName, number: newNumber};

        axios.post("http://localhost:3001/persons", newPerson)
            .then(response => setPersons(persons.concat(response.data)))
        setNewName('')
        setNewNumber('')
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
