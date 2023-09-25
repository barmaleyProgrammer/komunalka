const Select = ({options, defaultValue = '', value = '', onChange = null}) => {
    return (
        <select
            className="text-sm outline-none rounded-lg border border-borderColor focus:border-yellow_figma w-full p-2"
            value={value}
            onChange = {event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.label}</option>
            )}
        </select>
    );
};

export default Select;
