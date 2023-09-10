import React from 'react';
import {useState} from "react";
import AccordionItem from "../components/assets/accordionItem";

const Faq = () => {
    const [open, setOpen] = useState(false);
    const toggle = (index) => {
        if(open === index){
            return setOpen(null)
        }
        setOpen(index)
    }
    const AccordionData = [
        {
            title: "Чому саме Лічильники?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            title: "Які послуги є на сайті?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            title: "Чи передадуться мої показники лічильників до обранної компанії?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
    ];
    return (
        <section className=" w-[1152px] h-[317px] grid mx-auto">
            <h2 className="text-center text-[24px]">Часті питання</h2>
            <h4 className="text-center text-[18px]">Про сервіс LYCHYLNYK</h4>
            <div className="px-[40px] ">
                {AccordionData.map((data, index) => {
                    return <AccordionItem
                        key={index}
                        open={index === open}
                        tittle={data.title}
                        desc={data.desc}
                        toggle={() =>toggle(index)}
                    />;
                })}

            </div>
        </section>
    );
}
export default Faq;