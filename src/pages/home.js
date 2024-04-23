import arrow_right from '../img/arrow_right.svg';
import arrow_left from '../img/arrow_left.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import Button from '../components/button';
import { NavLink } from 'react-router-dom';
import {Collapse} from 'react-collapse';
import {useEffect, useState} from 'react';
import Modal from "../components/modal/modal";
import HomeCountersValue from "../components/homeCountersValue";
import HomeConsumptionCalculator from "../components/homeConsumptionCalculator";
import NewsList from './newsList';
import BannersBottom from "../components/BannersBottom";
import {faqList, topBannerList, advantagesList, neuronInfo, indicatorsInfo} from "../api2";

const Home = () => {

    const [categories, setCategories] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [opened, setOpened] = useState([]);
    const [topBanners, setTopBanners] = useState([]);
    const [advantages, setAdvantages] = useState([]);
    const [neuron, setNeuron] = useState([]);
    const [indicators, setIndicators] = useState([]);

    useEffect( () => {
        faqList().then((result) => {
            setCategories(result.categories[0]);
            setFaqs(result.faqs);
        });
        topBannerList().then((res) => {
            setTopBanners(res);
        });
        advantagesList().then((res) => {
            setAdvantages(res);
        });
        neuronInfo().then((res) => {
            setNeuron(res);
        });
        indicatorsInfo().then((res) => {
            setIndicators(res);
        });
    }, []);

    const [modalCountersHomeBlock, setModalCountersHomeBlock] = useState(false);
    const [modalConsumptionCalculator, setModalConsumptionCalculator] = useState(false);

    // const CountersHomeBlockActive = (e) => {
    //     e.stopPropagation();
    //     setModalCountersHomeBlock(true);
    // };
    // const ConsumptionCalculator = (e) => {
    //     e.stopPropagation();
    //     setModalConsumptionCalculator(true);
    // };

    const HomeBlock = (e, type) => {
        e.stopPropagation();
        if (type === 'indication') {
            setModalCountersHomeBlock(true);
        }
        if (type === 'calculator') {
            setModalConsumptionCalculator(true);
        }
        if (type === 'incorrect') {
            setModalConsumptionCalculator(true);
        }
     }

    const toggle = (id) => {
        setOpened((prevData) => {
            const clone = [...prevData];
            const index = clone.findIndex((item) => item === id);
            if (index === -1) {
                clone.push(id)
            } else {
                clone.splice(index, 1);
            }
            return clone;
        });
    };
    const AccordionItem = ({open, toggle, tittle, desc}) => {
        return (
            <div>
                <div className="bg-white flex justify-between items-center cursor-pointer" onClick={toggle}>
                    <p className="text-base font-medium py-3">{tittle}</p>
                        {open ?
                            <span className="p-1">
                                <svg width="16" height="2" id="minus" viewBox="0 0 16 2" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1H15"
                                          stroke="#2A3744"
                                          strokeWidth="2"
                                          strokeLinecap="round" />
                                </svg>
                            </span>
                            :
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 12H12M12 12H18M12 12V6M12 12V18"
                                          stroke="#2A3744"
                                          strokeWidth="1.5"
                                          strokeLinecap="round" />
                                    </svg>
                            </span>
                        }
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
            {/*https://www.youtube.com/watch?v=VFHWuy2olto*/}
            {/*https://medium.com/stackanatomy/build-an-elegant-gallery-with-react-responsive-carousel-926c4f34768e*/}
            {/*https://www.youtube.com/watch?v=C5NjxM1dyxY*/}
            <Carousel >
                {
                    topBanners.map((topBanner, index) => {
                        return (
                           <div key={index}>
                                <a href={ topBanner.url }>
                                    <section className="bg-[#F0F9FF] h-[406px]">
                                        <img src={ topBanner.image } alt="topBanner"/>
                                    </section>
                                </a>
                            </div>
                        )
                    })
                }
            </Carousel>
            <section>
                <div className="grid grid-cols-3 gap-8 mt-24 mb-28">
                        {
                            indicators.map((item, key) => {
                                 return (
                                     <div key={key} className="rounded-lg shadow-myCustom relative">
                                         <div className="mb-24">
                                             <p className="py-6 text-xl text-center">{item.title}</p>
                                             <p className="text-sm font-light px-4">{item.body}</p>
                                         </div>
                                         <div className="w-56 absolute mx-auto inset-x-3 bottom-4 mt-6">
                                            <Button type="submit" cssType={'secondary'} label={item.label_button}  onClick={(e) => HomeBlock(e, `${item.type_button}`)} />
                                         </div>
                                     </div>
                                 )
                            })
                        }
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
                    <div className="flex justify-between relative mt-6">
                            {
                                advantages.map((item, key) => {
                                    return (
                                        <div key={key} className="text-center w-72 mx-auto">
                                            <img className="mx-auto" src={item.icon} alt=""/>
                                            <p className="text-base font-medium p-4">{item.title}</p>
                                            <p className="text-sm font-light">{item.body}</p>
                                        </div>
                                    )
                                })
                            }
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
                    <h2 className="text-2xl text-center font-normal mt-4 mb-5">{neuron.title}</h2>
                    <div className="w-[945px] mx-auto text-sm font-light">
                        <div className="space-y-4">
                            <p dangerouslySetInnerHTML = {{ __html: neuron.body }}></p>
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
                <div>
                    <h2 className="mt-12 font-medium text-2xl text-center">Новини</h2>
                    <NewsList showPagination={false} perPage={3} />
                    <NavLink to="/news">
                        <h1 className="text-center text-[#2A3744] text-base mt-6 mb-24 underline underline-offset-4 decoration-0">Переглянути всі новини</h1>
                    </NavLink>
                </div>

            </section>
            <section className="bg-[#F0F5FA]">
                <div className="p-4">
                    <h2 className="text-2xl text-center font-medium mt-4 mb-5">Популярні питання</h2>
                            {
                                faqs.filter((item) => item.category_id === categories.id).map((faq, index2) => {
                                    return <AccordionItem
                                        key={index2}
                                        open={opened.includes(faq.id)}
                                        tittle={faq.title}
                                        desc={faq.description}
                                        toggle={() => toggle(faq.id)} />
                                })
                            }
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
