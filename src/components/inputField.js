export default ({ type = 'text', label = '', placeholder = '', required = false}) => {
    return (
        <div>
            <label className="text-sm">{label}</label>
            <div>
                <input
                    className="border-yellow_figma"
                    type={type}
                    placeholder={placeholder}
                    required={required}
                />
            </div>
        </div>
    );
};