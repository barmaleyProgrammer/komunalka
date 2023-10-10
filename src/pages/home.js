import logo_counter from '../img/logo_counter.png';
import logo_minion from '../img/logo_minion.png';
import icon_effective from '../img/icon_effective.svg';
import icon_eco_world from '../img/icon_eco_world.svg';
import group from '../img/group.svg';
import arrow_right from '../img/arrow_right.svg';
import arrow_left from '../img/arrow_left.svg';

import Button from "../components/button";
import {NavLink} from "react-router-dom";
const Home = () => {
    return (
        <>
            <section className="bg-[#F0F9FF] h-[406px]">
                <div>
                    <div className="logo_minion">
                        <img className="mx-auto" src={logo_minion} alt=""/>
                    </div>
                    <div className="logo_counter">
                        <img className="mx-auto" src={logo_counter} alt=""/>
                    </div>
                </div>
            <h1 className="text-center text-3xl">Передати покази лічильника – легко та швидко!</h1>
            </section>
            <section>
                <div className="flex justify-center space-x-2 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="6" fill="#CEDDE9"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="6" fill="#E7E7E7"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="6" fill="#E7E7E7"/>
                    </svg>
                </div>
                <div className="grid grid-cols-3 gap-x-8 w-[1152px] mx-auto mt-28 mb-28">
                    <div className="rounded-lg shadow-myCustom w-[361px] h-52">
                        <p className="py-6 text-xl text-center">Актуальні показання</p>
                        <p className="text-sm font-light px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Ut quis libero quis arcu laoreet</p>
                        <div className="w-56 mx-auto mt-6">
                            <Button type="submit" label={'Перевірити показання'} cssType={'secondary'} />
                        </div>
                    </div>
                    <div className="rounded-lg shadow-myCustom w-[361px] h-52">
                        <p className="py-6 text-xl text-center">Калькулятор споживання</p>
                        <p className="text-sm font-light px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Ut quis libero quis arcu laoreet</p>
                        <div className="w-56 mx-auto mt-6 whitespace-nowrap">
                            <Button type="submit" label={'Розрахувати споживання'} cssType={'secondary'} />
                        </div>
                    </div>
                    <div className="rounded-lg shadow-myCustom w-[361px] h-52">
                        <p className="py-6 text-xl text-center">Некоректні показання</p>
                        <p className="text-sm font-light px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Ut quis libero quis arcu laoreet</p>
                        <div className="w-56 mx-auto mt-6">
                            <Button type="submit" label={'Надіслати запит'} cssType={'secondary'} />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-[1152px] px-20 py-3 mx-auto shadow-myCustom mb-10">
                    <p className="text-2xl font-normal text-center mt-4">Навіщо реєструватись на Лічильник?</p>
                    <div className="grid grid-cols-3 mt-6 space-x-10 gap-x-4">
                        <div className="text-center">
                            <img className="mx-auto" src={icon_effective} alt=""/>
                            <p className="text-base font-medium p-4">Зручність та ефективність</p>
                            <p className="text-sm font-light">Сайт надає мешканцям Києва зручний та швидкий спосіб передавати показання лічильників,
                                не вимагаючи додаткових поїздок чи дзвінків. Це дозволяє заощадити час та зусилля.</p>
                        </div>
                        <div className="text-center">
                            <img className="mx-auto" src={icon_eco_world} alt=""/>
                            <p className="text-base font-medium p-4">Екологічна відповідальність</p>
                            <p className="text-sm font-light">Використання онлайн-платформи для передачі показань лічильників сприяє
                                зниженню паперового споживання та, отже, захисту навколишнього середовища.</p>
                        </div>
                        <div className="text-center">
                            <img className="mx-auto" src={group} alt=""/>
                            <p className="text-base font-medium p-4">Точність та надійність</p>
                            <p className="text-sm font-light">Можливість зробити показання самостійно зменшує ризик помилок,
                                повʼязаних з передачею інформації оператору. Це забезпечує точніше облікове обслуговування.</p>
                        </div>
                        <img className="arrow_right" src={arrow_right} alt=""/>
                        <img className="arrow_left" src={arrow_left} alt=""/>
                    </div>
                    <div className="w-44 mx-auto mt-5 mb-5">
                        <NavLink to="#" className="py-3.5 px-5 mr-2 mb-2 text-sm rounded w-full text-white_figma bg-yellow_figma" >
                            Зареєструватися
                        </NavLink>
                    </div>
                </div>
            </section>
        </>

    );
};
export default Home;

