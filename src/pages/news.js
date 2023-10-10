import Breadcrumbs from "../components/breadcrumbs";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import rectangle from './../img/rectangle.png';

const list_imgs = [
    { image: '/news/News1.png' },
    { image: '/news/News2.png' },
    { image: '/news/News3.png' },
    { image: '/news/News4.png' },
    { image: '/news/News5.png' },
    { image: '/news/News6.png' },
    { image: '/news/News7.png' },
    { image: '/news/News8.png' },
    { image: '/news/News9.png' },
    { image: '/news/News10.png' },
    { image: '/news/News11.png' },
    { image: '/news/News12.png' },
    { image: '/news/News13.png' },
    { image: '/news/News14.png' },
    { image: '/news/News15.png' },
];

const breadCrumbs = [
    {
        "to": '/',
        "label": 'Головна'
    },
    {
        "to": '',
        "label": 'Новини'
    },
];

const News = () => {
    const { id } = useParams();

    const NewsList = () => {
        return (
            <div className="grid grid-cols-3">
                {
                    list_imgs.map((item, key) => {
                        return (
                            <div key={key}>
                                <NavLink to={`/news/${key}`}>
                                    <img className="rounded-lg mt-4" src={item.image} alt=""/>
                                </NavLink>
                            </div>
                        );
                    })
                }
            </div>
        );
    };

    const CurrentNews = () => {

        return (
            <>
                <h1 className="mt-5 text-2xl">Інструкції зі зняття показників для новачків</h1>
                <p className="text-sm font-extralight mt-4">14.08.2023</p>
                <img className="mt-4" src={rectangle} alt=""/>
                <div className="w-[956px] mx-auto">
                    <p className="mt-4">Лічильники – це незамінна частина нашого повсякденного життя, забезпечуючи облік
                        та контроль витрат ресурсів, таких як електроенергія, вода, газ та тепло.
                        Правильне занесення та передача показань лічильника мають важливе значення
                        для точного обліку та оптимізації витрат. У цій статті ми розглянемо деякі практичні
                        поради про те, як правильно записати та передати показання лічильника.
                    </p>
                    <p className="mt-4">Лічильники – це незамінна частина нашого повсякденного життя, забезпечуючи облік
                        та контроль витрат ресурсів, таких як електроенергія, вода, газ та тепло.
                        Правильне занесення та передача показань лічильника мають важливе значення
                        для точного обліку та оптимізації витрат. У цій статті ми розглянемо деякі практичні
                        поради про те, як правильно записати та передати показання лічильника.
                    </p>
                    <p className="mt-4">Лічильники – це незамінна частина нашого повсякденного життя, забезпечуючи облік
                        та контроль витрат ресурсів, таких як електроенергія, вода, газ та тепло.
                        Правильне занесення та передача показань лічильника мають важливе значення
                        для точного обліку та оптимізації витрат. У цій статті ми розглянемо деякі практичні
                        поради про те, як правильно записати та передати показання лічильника.
                    </p>
                   <ul className="list-disc">
                       <li>1</li>
                       <li>1</li>
                       <li>1</li>
                   </ul>

                </div>
            </>
        )
    }

    return (
        <div>
            <Breadcrumbs items={ breadCrumbs } />
            { id ? <CurrentNews /> : <NewsList /> }
        </div>
    )
};
export default News;
