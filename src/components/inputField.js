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
        autoComplete = '',
        onFocus = undefined,
        onBlur = undefined
    }) => {
    return (
        <fieldset className={cssClass}>
            {label ? <label htmlFor={name} className="text-sm text-black_figma font-light">{label}</label> : ''}
            <input
                className="text-sm text-[#797878] outline-none rounded border border-borderColor focus:border-yellow_figma w-full p-3"
                type={type}
                name={name}
                id={name}
                value={value}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                readOnly={readOnly}
                autoComplete={autoComplete}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </fieldset>
    );
};

export default InputField;
