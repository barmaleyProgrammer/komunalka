import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Collapse } from "react-collapse";
import Breadcrumbs from "../components/breadcrumbs";

const breadCrumbs = [
    {
        "to": '/',
        "label": 'Головна'
    },
    {
        "to": '',
        "label": 'Часті питання'
    },
];
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
        section: 'about2',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id: 5,
        title: "Чи передадуться мої показники лічильників до обранної компанії?",
        section: 'about2',
        desc: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id: 6,
        title: "Чи передадуться мої показники лічильників до обранної компанії?",
        section: 'about2',
        desc: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id: 7,
        title: "Чи передадуться мої показники лічильників до обранної компанії?",
        section: 'cabinet',
        desc: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id: 8,
        title: "Чи передадуться мої показники лічильників до обранної компанії?",
        section: 'cabinet',
        desc: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id: 9,
        title: "Чи передадуться мої показники лічильників до обранної компанії?",
        section: 'cabinet',
        desc: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
];

const Faq = () => {
    const [opened, setOpened] = useState([]);

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
                <div className="flex justify-between items-center cursor-pointer" onClick={toggle}>
                    <p className="text-base font-normal py-3">{tittle}</p>
                    {open ? <AiOutlineMinus /> : <AiOutlinePlus /> }
                </div>
                <Collapse isOpened={open}>
                    <div className="font-normal text-sm mb-4">{desc}</div>
                </Collapse>
                <hr className="w-full text-borderColor"/>
            </div>
        );
    };

    return (
        <section>
            <Breadcrumbs items={breadCrumbs}/>
            <h2 className="text-center text-2xl">Часті питання</h2>
            <h4 className="text-center text-lg mt-10">Про сервіс LYCHYLNYK</h4>
            {AccordionData.filter((item) => item.section === 'about').map((data, index) => {
                return <AccordionItem
                    key={data.id}
                    open={opened.includes(data.id)}
                    tittle={data.title}
                    desc={data.desc}
                    toggle={() => toggle(data.id)}
                />;
            })}
            <h4 className="text-center text-lg mt-10">Про особистий кабінет</h4>
            {AccordionData.filter((item) => item.section === 'about2').map((data, index) => {
                return <AccordionItem
                    key={data.id}
                    open={opened.includes(data.id)}
                    tittle={data.title}
                    desc={data.desc}
                    toggle={() => toggle(data.id)}
                />;
            })}
            <h4 className="text-center text-lg mt-10">Рахунки-повідомлення та квитанції</h4>
            {AccordionData.filter((item) => item.section === 'cabinet').map((data, index) => {
                return <AccordionItem
                    key={data.id}
                    open={opened.includes(data.id)}
                    tittle={data.title}
                    desc={data.desc}
                    toggle={() => toggle(data.id)}
                />;
            })}
        </section>
    );
}
export default Faq;
