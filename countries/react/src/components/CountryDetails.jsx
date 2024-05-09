import WeatherDisplay from "./WeatherDisplay.jsx";

const CountryDetails = ({country}) => {
    return (
        <>
            <h1>{country.name.common}</h1>
            <br/>
            <div>capital {country.capital[0]}</div>
            <div>area {country.area}</div>

            <h3>languages: </h3>
            <ul>{Object.entries(country.languages)
                .map(([key, value]) => (<li key={key}>{value}</li>))}
            </ul>
            <img src={country.flags.png}/>
            <WeatherDisplay city={country.capital[0]}/>
        </>
    )

}

export default CountryDetails;