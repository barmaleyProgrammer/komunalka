export default ({ type = 'button', label = 'Save', cssType = 'primary'}) => {

    let className = ['py-2.5', 'px-5', 'mr-2', 'mb-2', 'text-sm', 'font-medium', 'rounded'];
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
        <button type={type} className={className.join(' ')}>{label}</button>
    );
};