import logo_counter from '../img/logo_counter.png';
import logo_minion from '../img/logo_minion.png';
import icon_effective from '../img/icon_effective.svg';
import icon_eco_world from '../img/icon_eco_world.svg';
import group from '../img/group.svg';
import arrow_right from '../img/arrow_right.svg';
import arrow_left from '../img/arrow_left.svg';
import komunalka_home from '../img/partners_home/komunalka_home.png';
import gerc_home from '../img/partners_home/gerc_home.png';
import kiyvOblEnergo_home from '../img/partners_home/kiyvOblEnergo_home.png';
import kiyvOblGaz_home from '../img/partners_home/kiyvOblGaz_home.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import Button from '../components/button';
import { NavLink } from 'react-router-dom';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import {Collapse} from 'react-collapse';
import {useState} from 'react';
import Modal from "../components/modal/modal";
import HomeCountersValue from "../components/homeCountersValue";
import HomeConsumptionCalculator from "../components/homeConsumptionCalculator";
import BannersBottom from "../components/BannersBottom";


const list_imgs = [
    { image: '/news/News1.png' },
    { image: '/news/News2.png' },
    { image: '/news/News3.png' },
];

const Home = (NewsList) => {
    const [modalCountersHomeBlock, setModalCountersHomeBlock] = useState(false);
    const [modalConsumptionCalculator, setModalConsumptionCalculator] = useState(false);

    const CountersHomeBlockActive = (e) => {
        e.stopPropagation();
        setModalCountersHomeBlock(true);
    };
    const ConsumptionCalculator = (e) => {
        e.stopPropagation();
        setModalConsumptionCalculator(true);
    };

    const AccordionData = [
        {
            id: 1,
            title: 'Чому саме Лічильники?',
            section: 'about',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            id: 2,
            title: 'Які послуги є на сайті?',
            section: 'about',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            id: 3,
            title: 'Чи передадуться мої показники лічильників до обранної компанії?',
            section: 'about',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            id: 4,
            title: 'Чи передадуться мої показники лічильників до обранної компанії?',
            section: 'cabinet',
            desc: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
    ];
    const [open, setOpen] = useState(0);
    const toggle = (index) => {
        if (open === index) {
            setOpen(0);
        } else {
            setOpen(index);
        }
    }
    const AccordionItem = ({open, toggle, tittle, desc}) => {
        return (
            <div>
                <div className="bg-white flex justify-between items-center cursor-pointer" onClick={toggle}>
                    <p className="text-base font-normal py-3">{tittle}</p>
                    <div>
                        {open ? <AiOutlineMinus /> : <AiOutlinePlus /> }
                    </div>
                </div>
                <Collapse isOpened={open}>
                    <div className="font-normal text-sm ">{desc}</div>
                </Collapse>
                <hr className="w-full text-borderColor"/>
            </div>
        );
    };

    return (
        <>
            <Carousel >
                {/*https://www.youtube.com/watch?v=VFHWuy2olto*/}
                {/*https://www.youtube.com/watch?v=C5NjxM1dyxY*/}
                <section className="bg-[#F0F9FF] h-[406px] relative">
                    <div>
                        <div className="logo_minion">
                            <img className="" src={logo_minion} alt=""/>
                        </div>
                        <div className="logo_counter">
                            <img className="" src={logo_counter} alt=""/>
                        </div>
                    </div>
                    <h1 className="text-center text-3xl select-none">Передати покази лічильника – легко та швидко!</h1>
                </section>
                <section className="bg-[#F0F9FF] h-[406px]">
                    <div>
                        <div className="logo_minion">
                            <img className="mx-auto" src={logo_minion} alt=""/>
                        </div>
                        <div className="logo_counter">
                            <img className="mx-auto" src={logo_counter} alt=""/>
                        </div>
                    </div>
                    <h1 className="text-center text-3xl select-none">Передати покази лічильника – легко та швидко! 2</h1>
                </section>
            </Carousel>
            <section>
                <div className="grid grid-cols-3 gap-x-8 mt-24 mb-28">
                    <div className="rounded-lg shadow-myCustom w-[361px] h-52">
                        <p className="py-6 text-xl text-center">Актуальні показання</p>
                        <p className="text-sm font-light px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Ut quis libero quis arcu laoreet</p>
                        <div className="w-56 mx-auto mt-6">
                            <Button type="submit" label={'Перевірити показання'} cssType={'secondary'} onClick={CountersHomeBlockActive} />
                        </div>
                    </div>
                    <div className="rounded-lg shadow-myCustom w-[361px] h-52">
                        <p className="py-6 text-xl text-center">Калькулятор споживання</p>
                        <p className="text-sm font-light px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Ut quis libero quis arcu laoreet</p>
                        <div className="w-56 mx-auto mt-6 whitespace-nowrap">
                            <Button type="submit" label={'Розрахувати споживання'} cssType={'secondary'} onClick={ConsumptionCalculator} />
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
                {
                    modalCountersHomeBlock && (
                        <Modal close={() => setModalCountersHomeBlock(false)}>
                            <HomeCountersValue close={() => setModalCountersHomeBlock(false)} />
                        </Modal>
                    )
                }
                {
                    modalConsumptionCalculator && (
                        <Modal close={() => setModalConsumptionCalculator(false)}>
                            <HomeConsumptionCalculator close={() => setModalConsumptionCalculator(false)} />
                        </Modal>
                    )
                }
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
                    <div>
                        {AccordionData.filter((item) => item.section === 'about').map((data, index) => {
                            return <AccordionItem
                                key={data.id}
                                open={data.id === open}
                                tittle={data.title}
                                desc={data.desc}
                                toggle={() =>toggle(data.id)}
                            />;
                        })}
                    </div>
                </div>
                <div className="py-10">
                    <NavLink to="/faq">
                        <h1 className="text-center text-[#2A3744] text-base underline underline-offset-4 decoration-0">Переглянути всі питання</h1>
                    </NavLink>
                </div>
            </section>
            <section>
                <BannersBottom />
            </section>
        </>
    );
};
export default Home;
