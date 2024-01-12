import Breadcrumbs from '../components/breadcrumbs';
import { useParams } from 'react-router-dom';
import CurrentNews from './currentNews';
import NewsList from './newsList';

const breadCrumbs = [
    {
        'to': '/',
        'label': 'Головна'
    },
    {
        'to': '',
        'label': 'Новини'
    },
];

const News = () => {
    const { id } = useParams();

    return (
        <div>
            <Breadcrumbs items={ breadCrumbs } />
            { id ? <CurrentNews id={id} />
                :
                <div>
                    <h2 className="pt-3 font-medium text-2xl">Новини</h2>
                    <NewsList />
                </div>

            }
        </div>
    )
};
export default News;
