const InputField = ({
        type = 'text',
        label = '',
        name = '',
        value = '',
        placeholder = '',
        required = false,
        onChange,
        readOnly = false,
        cssClass = ''
    }) => {
    return (
        <fieldset className={cssClass}>
            <label className="text-sm text-black_figma font-light">{label}</label>
            <input
                className="text-sm outline-none rounded-lg border border-borderColor focus:border-yellow_figma w-full p-2"
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                readOnly={readOnly}
            />
        </fieldset>
    );
};

export default InputField;
