import React from 'react';
import {AiOutlinePlus} from "react-icons/ai";
import Breadcrumb from "../components/breadcrumb";
import addAdressForm from "../components/assets/addAdressForm";


const CabinetMyAdresses = () => {

    return (
        <div className="mt-2 mx-auto w-[1152px]">
            <div>
                <Breadcrumb />
            </div>
            <div className=" space-y-2 rounded-lg shadow-lg  h-[564px]">
                <h3 className="text-center text-[20px] pb-6">Мої адреси</h3>
                <div className="flex space-x-[24px]">
                    <a href="addAdressForm">
                    <div className="ml-[196px] space-x-2 flex justify-center items-center border rounded-[4px] border-[#E7E7E7] w-[360px] h-[204px]">
                        <AiOutlinePlus />
                        <p className="">Додати адресу</p>
                    </div>
                    </a>
                    <div className="mr-[196px] space-x-2 flex justify-center items-center  border  rounded-[4px] border-[#E7E7E7] w-[360px] h-[204px]">
                        <AiOutlinePlus />
                        <p className="">Додати адресу</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CabinetMyAdresses;