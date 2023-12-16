import {NavLink} from "react-router-dom";
import AuthBlock from "./AuthBlock";

const CountersForm = ({actualValue, objectId, showRegister}) => {
    return (
        <div>
            {
                actualValue?.filter((item) => (item.idFirme == 116977)).map((item, key) => {
                    return (
                        <div key={key}>
                            <p>{item.nameFirme}</p>
                            <p className="lowercase mb-4">{item.namePlat}</p>
                            <span className="font-light mb-3">Особовий рахунок: </span>
                            <span className="">{objectId}</span>
                            <hr className="text-[#E2E8F0] mb-3 mt-3"/>
                            <p className="text-xs text-[#949494]">Лічильник №1</p>
                            <p className="mb-3">{item.abcounter}</p>
                            <p className="mb-3">Актуальні показання</p>
                            <p className="mb-3 text-[#797878]">{item.oldValue}</p>
                            <NavLink to="#" >
                                <p className="text-[#3E77AA]">Некоректні показання</p>
                            </NavLink>
                        </div>
                    )
                })
            }
            <AuthBlock showRegister={showRegister} />
        </div>
    )
}

export default CountersForm;