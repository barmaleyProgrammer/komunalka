import logo_counter from '../img/logo_counter.png';
import logo_minion from '../img/logo_minion.png';
const Home = () => {
    return (
        <section className="bg-[#F0F9FF] h-[406px]">
            <div>
                <div className="logo_minion">
                    <img className="mx-auto" src={logo_minion} alt=""/>
                </div>
                <div className="logo_counter">
                    <img className="mx-auto" src={logo_counter} alt=""/>
                </div>
            </div>
            <h1 className="text-center text-3xl">Передати покази лічильника – легко та швидко!</h1>
        </section>
    );
};
export default Home;
