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
        maxLength = '',
        autocomplete = '',
        onFocus = undefined,
        onBlur = undefined,
        pattern = undefined,
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
                maxLength={maxLength}
                autoComplete={autocomplete}
                onFocus={onFocus}
                onBlur={onBlur}
                pattern={pattern}
            />
        </fieldset>
    );
};

export default InputField;
