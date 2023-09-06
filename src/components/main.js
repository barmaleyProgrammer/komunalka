
export default () => {
    return (
<div className="flex">
        <div className="reg bg-backgr_footer mt-10 p-10 mx-auto rounded-[8px]">
            <form action="#" autoComplete="off">
                <div>
                    <label htmlFor="name">имя</label>
                    <div>
                        <div></div>
                        <input type="text" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="name"/>
                    </div>
                </div>
            </form>
        </div>
</div>
    );
};