import CountryShort from "./CountryShort.jsx";
import CountryDetails from "./CountryDetails.jsx";
import {useState} from "react";

const Countries = ({countries}) => {
    const [toShowCountries, setToShowCountries] = useState([]);

    function handleShowButtonClick(countryName) {
        if (toShowCountries.includes(countryName)) {
            setToShowCountries(toShowCountries.filter(name => name !== countryName))
        } else {
            setToShowCountries(toShowCountries.concat(countryName))
        }
    }

    return (
        <>
            {countries.length === 0 && (<div>No country found for this filter</div>)}
            {countries.length > 10 && (<div>Too many matches, specify another filter</div>)}
            {countries.length <= 10 && countries.length > 1
                && countries.map(country => {
                        return (
                            <div key={country.fifa}>
                                <CountryShort country={country}
                                              handleButtonClick={handleShowButtonClick}/>
                                {toShowCountries.includes(country.name.common) &&
                                    <CountryDetails country={country}/>}
                            </div>
                        )
                    }
                )}
            {countries.length === 1 && <CountryDetails country={countries[0]}/>}
        </>
    )
}

export default Countries