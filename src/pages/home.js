import logo_counter from '../img/logo_counter.png';
import logo_minion from '../img/logo_minion.png';
import icon_effective from '../img/icon_effective.svg';
import icon_eco_world from '../img/icon_eco_world.svg';
import group from '../img/group.svg';
import arrow_right from '../img/arrow_right.svg';
import arrow_left from '../img/arrow_left.svg';

import Button from "../components/button";
import { NavLink } from "react-router-dom";
import logo_lichylnyk from "../img/logo_lichylnyk.svg";
const list_imgs = [
    { image: '/news/News1.png' },
    { image: '/news/News2.png' },
    { image: '/news/News3.png' },

];

const Home = (NewsList) => {
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
                <div className="grid grid-cols-3 gap-x-8 mt-28 mb-28">
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
                <div className="py-3 shadow-myCustom">
                    <p className="text-2xl font-normal text-center mt-4">Навіщо реєструватись на Лічильник?</p>
                    <div className="relative grid grid-cols-3 mt-6">
                        <div className="text-center w-72 mx-auto">
                            <img className="mx-auto" src={icon_effective} alt=""/>
                            <p className="text-base font-medium p-4">Зручність та ефективність</p>
                            <p className="text-sm font-light">Сайт надає мешканцям Києва зручний та швидкий спосіб передавати показання лічильників,
                                не вимагаючи додаткових поїздок чи дзвінків. Це дозволяє заощадити час та зусилля.</p>
                        </div>
                        <div className="text-center w-72 mx-auto">
                            <img className="mx-auto" src={icon_eco_world} alt=""/>
                            <p className="text-base font-medium p-4">Екологічна відповідальність</p>
                            <p className="text-sm font-light">Використання онлайн-платформи для передачі показань лічильників сприяє
                                зниженню паперового споживання та, отже, захисту навколишнього середовища.</p>
                        </div>
                        <div className="text-center w-72 mx-auto">
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
            <section className="bg-[#F0F5FA]">
                <div className="p-4">
                    <h2 className="text-2xl text-center font-normal mt-4 mb-5">Нейронна мережа</h2>
                    <div className="w-[945px] mx-auto text-sm font-light">
                        <div className="space-y-4">
                            <p>Наша інноваційна система використовує потужну нейронну мережу для автоматичного визначення адреси, повʼязаної
                                з<br/> обраними користувачем параметрами:
                                <q lang="fr">вода</q>, <q lang="fr">газ</q>, <q lang="fr">електрика</q> або <q lang="fr">тепло</q>.</p>
                            <p>Просто оберіть необхідний блок та завантажте відповідне фото, і наша система автоматично розпізнає зображення
                                та визначає відповідну адресу. Наш розроблений алгоритм забезпечує швидку та точну ідентифікацію,
                                допомагаючи ефективно знаходити необхідну інформацію без зайвих зусиль.</p>
                        </div>
                        <div className="w-[760px] mx-auto border-dashed border rounded border-[#797878] mt-8 mb-5">
                            <p className="text-center mt-5">Перетягніть фото сюди</p>
                            <p className="text-center mt-5">або</p>
                            <div className="w-44 mx-auto mt-5 mb-5 px-7">
                                <NavLink to="#" className="py-3 px-5 text-sm rounded text-white_figma bg-yellow_figma" >
                                    Завантажте
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                    <h1 className="text-center text-2xl mt-14">Новини</h1>
                        <div className="grid grid-cols-3">
                            {
                                list_imgs.map((item, key) => {
                                    return (
                                        <div key={key}>
                                            <NavLink to={`/news/${key}`}>
                                                <img className="rounded-lg mt-4" src={item.image} alt=""/>
                                            </NavLink>
                                        </div>
                                    );
                                })
                            }
                        </div>
                <NavLink to="/news">
                    <h1 className="text-center text-[#2A3744] text-base mt-6 mb-24 underline underline-offset-4 decoration-0">Переглянути всі новини</h1>
                </NavLink>
            </section>
            <section className="bg-[#F0F5FA]">
                <div className="p-4">
                    <h2 className="text-2xl text-center font-normal mt-4 mb-5">Популярні питання</h2>

                </div>
            </section>
        </>

    );
};
export default Home;

