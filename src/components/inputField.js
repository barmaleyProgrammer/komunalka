const InputField = ({ type = 'text', label = '', name = '', value = '', placeholder = '', required = false, onChange}) => {
    return (
        <div>
            <label className="text-sm text-black_figma font-normal">{label}</label>
            <div>
                <input
                    className="text-sm outline-none rounded-lg border border-borderColor focus:border-yellow_figma w-[368px] h-[48px] p-2"
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    required={required}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default InputField;
