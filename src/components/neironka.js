import Neiron from "../img/neiron.png";
import icon_question from "../img/icon_question.png";
import {Tooltip} from "react-tooltip";

const Neironka = () => {
    const text = 'Наша потужна нейронна мережа\nробить пошук інформації легким\nта швидким.\n' +
        ' Просто завантажте фото\nвідповідного блоку, і система\nавтоматично визначить адресу.\n' +
        'Забудьте про витрати часу на ручний\nпошук – наша нейронна мережа\nзробить це за вас!';
    return (
        <div>
            <img className="w-[32px] h-[31px] my-auto mr-5" src={Neiron} alt=""/>
            <p className="relative left-7 bottom-11" data-tooltip-id="my-tooltip" data-tooltip-content={text}>
                <img className="absolute w-[24px] h-[24px]" src={icon_question} alt=""/>
            </p>
            <Tooltip id="my-tooltip" />
            {/*https://www.youtube.com/shorts/jMBs98TJ7Pk*/}
        </div>
    )
};
export default Neironka