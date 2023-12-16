import Button from "../button";
import {NavLink} from "react-router-dom";
import google from "../../img/google.svg";
import facebook from "../../img/facebook.svg";
import logo_com_block from "../../img/logo_com_block.png";
import logo_gerc from "../../img/logo_gerc.svg";
import {authSocialNetworks} from "../../api";

const AuthBlock = ({showRegister}) => {
    const SocialNetworks = (event, type) => {
        event.preventDefault();
        authSocialNetworks(type);
    };

    return (
        <div>
            <hr className="text-[#E2E8F0] mt-3 mb-3"/>
            <h2>Для передачі нових показань перейдіть у<br/><p className="text-[#3E77AA] mb-3">Особистий кабінет</p></h2>
            <Button type="submit" label={'Увійти'} cssType={'primary'} />
            <div className="py-2 font-light text-base">
                Ще немає аккаунту? <NavLink to="#" onClick={showRegister} className="text-[#3E77AA]">Зареєструватися</NavLink>
            </div>
            <div className="flex gap-2 text-[#797878] mb-2">
                <hr className="w-1/3 mt-3"/>
                <span className="w-1/3 whitespace-nowrap">чи за допомогою</span>
                <hr className="ml-4 w-1/3 mt-3"/>
            </div>
            <div className="flex flex-row space-x-2 mb-2">
                <div className="cursor-pointer basis-1/2 border border-[#E8E8E8;] rounded"
                     onClick={(event) => SocialNetworks(event, 'google')}
                >
                    <div className="flex py-3 justify-center space-x-2">
                        <img src={google} alt="" />
                        <p className="text-sm whitespace-nowrap">Ввійти з Google</p>
                    </div>
                </div>
                <div className="cursor-pointer basis-1/2 border border-[#E8E8E8;] rounded"
                     onClick={(event) => SocialNetworks(event, 'facebook')}
                >
                    <div className="flex py-3 justify-center space-x-2">
                        <img src={facebook} alt="" />
                        <p className="text-sm whitespace-nowrap">Ввійти з Facebook</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row space-x-2">
                <div className="basis-1/2 border border-[#E8E8E8;] rounded">
                    <div className="flex p-2 justify-center space-x-1">
                        <img src={logo_com_block} alt=""/>
                    </div>
                </div>
                <div className="basis-1/2 border border-[#E8E8E8;] rounded">
                    <div className="flex p-2 justify-center">
                        <img src={logo_gerc} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthBlock;