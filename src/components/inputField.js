const InputField = ({ type = 'text', label = '', name = '', value = '', placeholder = '', required = false, onChange, readOnly = false }) => {
    return (
        <div>
            <label className="text-xs text-black_figma font-light">{label}</label>
            <div>
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
            </div>
        </div>
    );
};

export default InputField;
