import logo from "../img/logo.svg";

function Footer() {
    return (
        <footer className="w-full p-4 py-6">
            <div className="grid grid-cols-4 gap-20 mx-auto">
                <div className="mb-1 md:mb-0">
                    <a href="https://komunalka.ua/" className="flex items-center">
                        <img src={logo} className="h-8 mr-2" alt="kamunalka logo"/>
                    </a>
                    <ul className="text-gray-500">
                        <li className="mb-1 mt-3 text-xs">
                            <p>made by GERC</p>
                        </li>
                        <li className="mb-1 text-xs">
                            <p>lichylnyk.com.ua © 2023</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-2  text-sm">
                            <a href="#services" className="hover:underline">Послуги</a>
                        </li>
                        <li className="mb-2 text-sm">
                            <a href="#news" className="hover:underline">Новини</a>
                        </li>
                        <li className="mb-2 text-sm">
                            <a href="#questions" className="hover:underline">Часті питання</a>
                        </li>
                        <li className="mb-2 text-sm">
                            <a href="#about" className="hover:underline">Про нас</a>
                        </li>
                        <li className="mb-2 text-sm">
                            <a href="#contacts" className="hover:underline">Контакти</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-2 text-sm font-sans Goth">
                            <p className="hover:underline">Контакти</p>
                        </li>
                        <li className="mb-2 text-sm">
                            <a href="tel:380449998877">+38 (044) - 999- 88- 77</a>
                        </li>
                        <li className="mb-2 text-sm">
                            <a href="tel:380800666555">0 - 800 - 666- 555</a>
                        </li>
                        <li className="mb-2 text-sm">
                            <a href="mailto:support@lichilnyk.com.ua">support@lichilnyk.com.ua</a>
                        </li>

                    </ul>
                </div>
                <div className="flex mt-4 space-x-8 sm:justify-center sm:mt-0">
                    <a href="https://www.facebook.com/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="currentColor" viewBox="0 0 8 19">
                            <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"/>
                        </svg>
                        {/*<span className="sr-only">Facebook page</span>*/}
                    </a>
                    <a href="https://www.instagram.com/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"/></svg>
                        {/*<span className="sr-only">instagram page</span>*/}
                    </a>
                    <a href="https://web.telegram.org/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512">
                            <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg>
                        {/*<span className="sr-only">Telegram page</span>*/}
                    </a>
                    <a href="https://www.viber.com/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            <path d="M444 49.9C431.3 38.2 379.9.9 265.3.4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5c-1.4 66.5-3.1 191.1 117 224.9h.1l-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8 8.7-9.4 20.7-23.2 29.8-33.7 82.2 6.9 145.3-8.9 152.5-11.2 16.6-5.4 110.5-17.4 125.7-142 15.8-128.6-7.6-209.8-49.8-246.5zM457.9 287c-12.9 104-89 110.6-103 115.1-6 1.9-61.5 15.7-131.2 11.2 0 0-52 62.7-68.2 79-5.3 5.3-11.1 4.8-11-5.7 0-6.9.4-85.7.4-85.7-.1 0-.1 0 0 0-101.8-28.2-95.8-134.3-94.7-189.8 1.1-55.5 11.6-101 42.6-131.6 55.7-50.5 170.4-43 170.4-43 96.9.4 143.3 29.6 154.1 39.4 35.7 30.6 53.9 103.8 40.6 211.1zm-139-80.8c.4 8.6-12.5 9.2-12.9.6-1.1-22-11.4-32.7-32.6-33.9-8.6-.5-7.8-13.4.7-12.9 27.9 1.5 43.4 17.5 44.8 46.2zm20.3 11.3c1-42.4-25.5-75.6-75.8-79.3-8.5-.6-7.6-13.5.9-12.9 58 4.2 88.9 44.1 87.8 92.5-.1 8.6-13.1 8.2-12.9-.3zm47 13.4c.1 8.6-12.9 8.7-12.9.1-.6-81.5-54.9-125.9-120.8-126.4-8.5-.1-8.5-12.9 0-12.9 73.7.5 133 51.4 133.7 139.2zM374.9 329v.2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5-16.2-12.8-31-27.9-42.4-42.4-10.3-12.9-20.7-28.2-30.8-46.6-21.3-38.5-26-55.7-26-55.7-6.7-20.8 14.2-41 33.3-51.8h.2c9.2-4.8 18-3.2 23.9 3.9 0 0 12.4 14.8 17.7 22.1 5 6.8 11.7 17.7 15.2 23.8 6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1.8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7 14.7 8.3 33.4 21.2 45.8 32.9 7 5.7 8.6 14.4 3.8 23.6z"/></svg>
                        {/*<span className="sr-only">Viber page</span>*/}
                    </a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;