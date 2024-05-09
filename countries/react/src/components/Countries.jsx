import CountryShort from "./CountryShort.jsx";
import CountryDetails from "./CountryDetails.jsx";

const Countries = ({countries}) => {
    return (
        <>
            {countries.length === 0 && (<div>No country found for this filter</div>)}
            {countries.length > 10 && (<div>Too many matches, specify another filter</div>)}
            {countries.length <= 10 && countries.length > 1
                && countries.map(country => <CountryShort key={country.fifa} country={country}/>)}
            {countries.length === 1 && <CountryDetails country={countries[0]}/>}
        </>
    )
}

export default Countries