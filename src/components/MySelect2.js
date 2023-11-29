const MySelect2 = (props) => {

    return (
        <select
            className="text-sm outline-none rounded text-[#FD9800] bg-[#F7F9FE] w-full h-full p-2"
            value={props.value}
            name={props.name}
            onChange = {props.onChange}
        >
            <option value="">{props.defaultValue}</option>
            { props.options.map((item, key) => <option key={key} value={item.value}>{item.label}</option>) }
        </select>
    );
};

export default MySelect2;
