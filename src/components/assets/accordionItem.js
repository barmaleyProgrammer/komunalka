import React from 'react';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {Collapse} from "react-collapse";

const AccordionItem = ({open, toggle, tittle, desc}) => {
    return (
        <div className="pt-[10px] ">
            <div className="bg-white py-[5px] px-[50px] flex justify-between items-center cursor-pointer"
                 onClick={toggle}>
                <p className="text-[16px] font-normal">{tittle}</p>
                <div className="text-[24px]">
                    {open ? <AiOutlineMinus /> : <AiOutlinePlus /> }
                </div>
            </div>
            <Collapse isOpened={open}>
                <div className="font-normal text-[14px] px-[50px] pb-[20px]">{desc}</div>
            </Collapse>
            <hr className="w-full text-borderColor"/>

        </div>
    );
};

export default AccordionItem;