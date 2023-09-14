import logo_counter from '../img/logo_counter.png';
import logo_minion from './../img/logo_minion.png'
const Main = () => {
    return (
        <section className="bg-[#F0F9FF]">
            <div>
                <div className={'logo_minion'}>
                    <img className="mx-auto h-[154px]" src={logo_minion} alt="Flowbite Logo"/>
                </div>
                <div className={'logo_counter'}>
                    <img className="mx-auto mb-4 h-[188px]" src={logo_counter} alt="Flowbite Logo"/>
                </div>
            </div>
            <div>
                <h2 className=" text-center text-[42px] leading-normal tracking-normal">Передати покази лічильника – легко та швидко!</h2>
            </div>
        </section>
    );
};
export default Main;





