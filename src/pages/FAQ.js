import React from 'react';
import {useState} from "react";
import AccordionItem from "../components/assets/accordionItem";
import BreadcrumbCadinetAdresses from "../components/breadcrumbCadinetAdresses";
import BreadcrumbCadinetFAQ from "../components/breadcrumbCadinetFAQ";

const Faq = () => {
    const [open, setOpen] = useState(0);
    const toggle = (index) => {
        if (open === index) {
            setOpen(0);
        } else {
            setOpen(index);
        }
    }
    const AccordionData = [
        {
            id: 1,
            title: "Чому саме Лічильники?",
            section: 'about',
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            id: 2,
            title: "Які послуги є на сайті?",
            section: 'about',
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            id: 3,
            title: "Чи передадуться мої показники лічильників до обранної компанії?",
            section: 'about',
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            id: 4,
            title: "1Чи передадуться мої показники лічильників до обранної компанії?",
            section: 'cabinet',
            desc: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
    ];
    return (
        <section className=" w-[1152px] h-[317px] grid mx-auto">
            <BreadcrumbCadinetFAQ />
            <h2 className="text-center text-[24px]">Часті питання</h2>
            <h4 className="text-center text-[18px]">Про сервіс LYCHYLNYK</h4>
            <div className="px-[40px] ">
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
            <h4 className="text-center text-[18px]">Про особистий кабінет</h4>
            <div className="px-[40px] ">
                {AccordionData.filter((item) => item.section === 'cabinet').map((data, index) => {
                    return <AccordionItem
                        key={data.id}
                        open={data.id === open}
                        tittle={data.title}
                        desc={data.desc}
                        toggle={() =>toggle(data.id)}
                    />;
                })}
            </div>
        </section>
    );
}
export default Faq;