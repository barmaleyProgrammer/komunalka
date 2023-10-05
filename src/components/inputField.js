const InputField = ({
        type = 'text',
        label = '',
        name = '',
        value = '',
        placeholder = '',
        required = false,
        onChange,
        readOnly = false,
        cssClass = '',
        autoComplete = ''
    }) => {
    return (
        <fieldset className={cssClass}>
            {label ? <label htmlFor={name} className="text-sm text-black_figma font-light">{label}</label> : ''}
            <input
                className="text-sm outline-none rounded border border-borderColor focus:border-yellow_figma w-full p-4"
                type={type}
                name={name}
                id={name}
                value={value}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                readOnly={readOnly}
                autoComplete={autoComplete}
            />
        </fieldset>
    );
};

export default InputField;
