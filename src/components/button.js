const Button = ({ type = 'button', label = 'Save', cssType = 'primary', onClick}) => {
    let className = ['py-2.5', 'px-5', 'mr-2', 'mb-2', 'text-sm', 'font-medium', 'rounded', 'w-full'];
    switch (cssType) {
        case 'primary':
            className = className.concat(['text-white_figma', 'bg-yellow_figma']);
            break;
        case 'secondary':
            className = className.concat(['text-black_figma', 'bg-white_figma', 'border', 'border-yellow_figma']);
            break;
        default:
            className = [];
    }
    return (
        <button type={type} className={className.join(' ')} onClick={onClick}>{label}</button>
    );
};

export default Button;
