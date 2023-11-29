import { useContext } from 'react';
import { Context } from '../store';

const MySelect = ({options, type = 'provider', defaultValue = '', value, onChange}) => {
    const [state, dispatch] = useContext(Context);

    return (
        <select
            className="text-sm outline-none rounded text-[#FD9800] bg-[#F7F9FE] w-full h-full p-2"
            value={state[type]}
            name=""
            onChange = {(event) => dispatch({ type, payload: event.target.value })}
        >
            <option value="">{defaultValue}</option>
            { options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>) }
        </select>
    );
};

export default MySelect;
