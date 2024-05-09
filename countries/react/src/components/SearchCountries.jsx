const SearchCountries = ({value, handleValueChange}) => {
    return (
        <div>find countries <input value={value} onChange={handleValueChange}/></div>
    )
}

export default SearchCountries;