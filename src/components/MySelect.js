const Select = ({options, defaultValue = '', value = '', onChange = null, name = ''}) => {
    return (
        <select
            className="text-sm outline-none rounded text-[#FD9800] bg-[#F7F9FE] w-full h-full p-2"
            value={value}
            name={name}
            onChange = {event => onChange(event.target.value)}
        >
            <option value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.label}</option>
            )}
        </select>
    );
};

export default Select;
