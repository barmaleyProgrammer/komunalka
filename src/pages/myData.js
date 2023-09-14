import React from 'react';
import BreadcrumbCadinetMyData from "../components/breadcrumbCadinetMyData";
import {NavLink} from "react-router-dom";
import InputField from "../components/inputField";
import RadioMyData from "../components/assets/radioMyData";

const MyData = () => {
    return (
        <div className="mt-2 mx-auto w-[1152px]">
            <div>
                <BreadcrumbCadinetMyData />
            </div>
            <div className="mt-4 mb-4 items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                    <li>
                        <NavLink to="/cabinet" className="w-auto h-[48px] py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded text-black_figma bg-[#CEDDE9]">Мої адреси</NavLink>
                    </li>
                    <li>
                        <NavLink to="/myData" className="w-auto h-[48px] py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded text-black_figma bg-[#CEDDE9]">Мої дані</NavLink>
                    </li>
                    <li>
                        <NavLink className="w-auto h-[48px] py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded text-black_figma bg-[#CEDDE9]" to="">Оповіщення</NavLink>
                    </li>
                </ul>
            </div>
            <div className="px-10 font-light space-y-2 rounded-lg shadow-lg h-[700px]">
                <h1 className="font-normal text-lg pb-2 py-4">Основна інформація</h1>
                <div className="grid grid-flow-row grid-cols-2 gap-4 py-4">
                    <div className="p-2 mx-auto">
                    <p className="text-xs">Прізвище</p>
                    <div className="rounded-lg border border-[#E7E7E7] w-[309px] h-[48px] text-sm py-3 px-2">
                        <p>Іванов</p>
                    </div>
                    </div>
                    <InputField
                        label={'Email'}
                        type={'email'}
                        placeholder={'Введіть свій email'}
                        name={'email'}
                        required={true}
                        // value={form.email}
                        // onChange={handleInputChange}
                    />
                    <div className="p-2 mx-auto">
                        <p className="text-xs">Ім’я</p>
                        <div className="rounded-lg border border-[#E7E7E7] w-[309px] h-[48px] text-sm py-3 px-2">
                            <p>Іван</p>
                        </div>
                    </div>
                    <InputField
                        label={'Телефон'}
                        type={'phone'}
                        placeholder={'+38(0_ _) _ _ _ - _ _ _ - _ _'}
                        name={'phone'}
                        required={true}
                        // value={form.phone}
                        // onChange={handleInputChange}
                    />
                    <div className="p-2 mx-auto">
                        <p className="text-xs">По батькові</p>
                        <div className="rounded-lg border border-[#E7E7E7] w-[309px] h-[48px] text-sm py-3 px-2">
                            <p>Іванович</p>
                        </div>
                    </div>
                    <InputField
                        label={'Пароль'}
                        type={'type'}
                        name={'password'}
                        required={true}
                        // value={form.password}
                        // onChange={handleInputChange}
                    />
                    <h1 className="font-normal text-lg pb-2 py-4">Додадково</h1>
                </div>
                <div className="px-2">
                    <RadioMyData />
                </div>
                <div className="mb-4">
                <InputField
                    label={'Дата народження'}
                    type={'data'}
                    name={'data'}
                    required={true}
                    // value={form.password}
                    // onChange={handleInputChange}
                />
                </div>
                <NavLink to="" className="py-2.5 px-5 mb-4 mt-4 text-sm font-medium rounded-lg text-white_figma bg-yellow_figma w-[368px]">
                    Зберігти зміни
                </NavLink>
            </div>

        </div>
    );
};

export default MyData;