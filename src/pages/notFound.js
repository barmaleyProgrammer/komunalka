import icon404 from '../img/icon404.png';
import Button from '../components/button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <img className="mx-auto p-10" src={icon404} alt=""/>
                <p className="text-center text-5xl font-semibold">Сторінку не знайдено</p>
                <p className="text-center text-base font-normal py-6">На жаль, запитану вами сторінку не знайдено. Будь ласка, поверніться на головну сторінку.</p>
            </div>
            <div className="mx-auto w-44">
                <Button type="button" label={'На головну'} cssType={'primary'} onClick={() => navigate('/') } />
            </div>
        </>
    );
};

export default NotFound;
