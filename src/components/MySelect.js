const Select = ({options, defaultValue = '', value = '', onChange = null}) => {
    return (
        <select value={value} onChange = {event => onChange(event.target.value)}>
            <option disabled value="0">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.label}</option>
            )}
        </select>
    );
};

export default Select;