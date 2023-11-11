import InputMask from "react-input-mask";
const PhoneField = (props) => {
    return (
        <fieldset className={props.cssClass}>
            {props.label ? <label htmlFor={props.name} className="text-sm text-black_figma font-light">{props.label}</label> : ''}
            <InputMask
                className="text-sm text-[#797878] outline-none rounded border border-borderColor focus:border-yellow_figma w-full p-3"
                mask="+99 (999) 999-99-99"
                onChange={props.onChange}
                value={props.value}
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                required={props.required}
                onPaste={props.onPaste}
                readOnly={props.readOnly}
                maxLength={props.maxLength}
                autoComplete={props.autocomplete}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                pattern={props.pattern}
            />
        </fieldset>
    );
};

export default PhoneField;
