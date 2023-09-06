import React from "react";
import InputField from "../components/inputField";
import logo from "../img/logo.svg";
import icon from "../img/icon_komunalka.svg";
import text_komunalka from "../img/komunalka_text.svg";
import logo_gerc from "../img/logo_gerc.png";
import './reg.css';
import Button from "../components/button";

export default () => {
    return (
        <div className="reg mt-10 p-10 mx-auto rounded-[8px]">
            <div className="mt-0 ml-0 mb-8">
                <img src={logo} className="h-16 mx-auto" alt="Flowbite Logo"/>
            </div>
            <h4 className="">Реєстрація</h4>
            <form className="space-y-2" action="#" autoComplete="off">
                <InputField label={'Email'} type={'email'} placeholder={'example@gmail.com'} required={true} />
                <InputField label={'Прізвище'} placeholder={'Бандера'} required={true} />
                <InputField label={'імʼя'} placeholder={'Степан'} required={true} />
                <InputField label={'По батькові'} placeholder={'Андрійович'} required={true} />
                <InputField label={'Телефон'} type={'phone'} placeholder={'+38(0_ _) _ _ _ - _ _ _ - _ _'} required={true} />
                <InputField label={'Пароль'} type={'password'}required={true} />
                <hr/>
                <div>
                    <p className="text-[#2A3744]">При вході через сайти партнерів є змога</p>
                    <p className="text-[#2A3744]"> автоматично додати адреси</p>
                </div>
                <div className="flex space-x-1">
                    <div className="basis-1/2 border border-[#E8E8E8;] rounded-[2px]">
                        <div className="logo_komunalka">
                            <img src={icon}/>
                            <img src={text_komunalka}/>
                        </div>
                    </div>
                    <div className="basis-1/2 text-center border border-[#E8E8E8;] rounded-[2px]">
                        <div className="logo_komunalka">
                            <img src={logo_gerc} className="" />
                        </div>
                    </div>
                </div>
                <div>
                    <Button type="button" label={'Зареєструватися'} cssType={'primary'} />
                </div>


            </form>
        </div>
    );
}
