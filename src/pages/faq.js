import { useState } from "react";
import Breadcrumbs from "../components/breadcrumbs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Collapse } from "react-collapse";

const Faq = () => {
    const [open, setOpen] = useState(0);
    const breadCrumbs = [
        {
            "to": '/',
            "label": 'Головна'
        },
        {
            "to": '',
            "label": 'Часті питання'
        },
    ]
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
            title: "Чому саме Лічильники?",
            section: 'about',
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            id: 5,
            title: "Чи передадуться мої показники лічильників до обранної компанії?",
            section: 'cabinet',
            desc: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
    ];

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
        <section>
            <Breadcrumbs items={breadCrumbs}/>
            <h2 className="text-center text-2xl mb-8">Часті питання</h2>
            <h4 className="text-center text-lg mb-5">Про сервіс LYCHYLNYK</h4>
            <div className="">
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
            <h4 className="text-center text-lg mt-6">Про особистий кабінет</h4>
            <div className="">
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
            <h4 className="text-center text-lg mt-6">Рахунки-повідомлення та квитанції</h4>
            <div className="">
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
        </section>
    );
}
export default Faq;
