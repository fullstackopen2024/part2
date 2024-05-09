import SearchCountries from "./components/SearchCountries.jsx";
import {useEffect, useState} from "react";
import Countries from "./components/Countries.jsx";
import countryService from "./services/countryService.js";

function App() {
    const [countries, setCountries] = useState([])
    const [searchString, setSearchString] = useState('')
    const [filteredCountries, setFilteredCountries] = useState([])

    useEffect(() => {
        countryService.getAll().then(data => setCountries(data))
    }, []);

    function handleSearchFilter(event) {
        const searchString = event.target.value
        setSearchString(searchString)

        const matchingCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchString.toLowerCase()))
        setFilteredCountries(matchingCountries)
    }

    return (
        <>
            <SearchCountries value={searchString} handleValueChange={handleSearchFilter}/>
            <Countries countries={filteredCountries}/>
        </>
    )
}

export default App
