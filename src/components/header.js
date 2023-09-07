import logo_lichylnyk from "../img/logo_lichylnyk.svg";
import Button from "./button";


export default () => {

    return (
        <header className="w-full">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/">
                    <img src={logo_lichylnyk} className="h-8 mr-3" alt="Flowbite Logo"/>
                </a>
                <div className="flex md:order-2">
                    <Button type="button" label={'Увійти'} cssType={'secondary'}/>
                    <Button type="button" label={'Зареєструватися'} cssType={'primary'} />
                    <button data-collapse-toggle="navbar-sticky" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        <li>
                            <a href="#services"
                               className="block py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0 md:dark:text-black"
                               aria-current="page">Послуги</a>
                        </li>
                        <li>
                            <a href="#news"
                               className="block py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0 md:dark:text-black"
                               aria-current="page">Новини</a>
                        </li>
                        <li>
                            <a href="#questions"
                               className="block py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0 md:dark:text-black"
                               aria-current="page">Часті питання</a>
                        </li>
                        <li>
                            <a href="#about"
                               className="block py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0 md:dark:text-black"
                               aria-current="page">Про нас</a>
                        </li>
                        <li>
                            <a href="#contacts"
                               className="block py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0 md:dark:text-black"
                               aria-current="page">Контакти</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};