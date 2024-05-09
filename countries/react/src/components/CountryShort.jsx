import {useState} from "react";

const CountryShort = ({country, handleButtonClick}) => {
    const [showButton, setShowButton] = useState(false);

    const handleButtonClickInternal = () => {
        setShowButton(!showButton)
        handleButtonClick(country.name.common)
    }

    return (<div>{country.name.common}
        <button onClick={handleButtonClickInternal}>{showButton ? 'hide' : 'show'}</button>
    </div>)
}

export default CountryShort;