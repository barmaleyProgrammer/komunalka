import {useEffect, useState} from 'react';
import { Collapse } from 'react-collapse';
import Breadcrumbs from '../components/breadcrumbs';
import { faqList } from "../api2";

const breadCrumbs = [
    {
        'to': '/',
        'label': 'Головна'
    },
    {
        'to': '',
        'label': 'Часті питання'
    },
];

const Faq = () => {
    const [categories, setCategories] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [opened, setOpened] = useState([]);

    useEffect( () => {
        faqList().then((result) => {
            setCategories(result.categories);
            setFaqs(result.faqs);
        });
    }, []);


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
                    <p className="text-base font-medium py-3">{tittle}</p>
                    {/*{open ? <AiOutlineMinus className="AiOutlineMinusClassNames" /> : <AiOutlinePlus /> }*/}
                    {open ?
                        <span className="p-1">
                            <svg width="16" height="2" id="minus" viewBox="0 0 16 2" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1H15"
                                      stroke="#2A3744"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                />
                            </svg>
                        </span>
                        :
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12H12M12 12H18M12 12V6M12 12V18"
                                  stroke="#2A3744"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                />
                        </svg>
                        </span>
                    }
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
            <h2 className="text-center font-medium text-2xl">Часті питання</h2>
            {
                categories.map((category, index) => {
                    return (
                        <div key={index}>
                            <h4 className="text-center font-medium text-lg mt-10">{category.name}</h4>
                            {
                                faqs.filter((item) => item.category_id === category.id).map((faq, index2) => {
                                    return <AccordionItem
                                        key={index2}
                                        open={opened.includes(faq.id)}
                                        tittle={faq.title}
                                        desc={faq.description}
                                        toggle={() => toggle(faq.id)} />
                                })
                            }
                        </div>
                    );
                })
            }
        </section>
    );
}
export default Faq;
