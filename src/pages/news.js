import Breadcrumbs from "../components/breadcrumbs";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

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
        return list_imgs.map((item, key) => {
            return (
                <div key={key}>
                    <NavLink to={`/news/${key}`}>
                        <img className="h-auto w-60 rounded-lg" src={item.image} alt=""/>
                    </NavLink>
                </div>
            );
        });
    };

    const CurrentNews = () => {
        return (
            <div> NEWS # { id }</div>
        )
    }

    return (
        <div className="w-[1152px] pl-20 py-3 mx-auto">
            <Breadcrumbs items={ breadCrumbs } />
            <div className="mt-4 grid grid-cols-3 gap-10">
                { id ? <CurrentNews /> : <NewsList /> }
            </div>
        </div>
    )
};
export default News;
