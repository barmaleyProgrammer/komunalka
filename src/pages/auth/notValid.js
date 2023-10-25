
const NotValid = () => {
    const url = new URL(window.location);
    const message = url.searchParams.get('message') || '';
    return (<div>
        <h1>Not Valid</h1>
        <p>{message}</p>
    </div>);
};
export default NotValid;
