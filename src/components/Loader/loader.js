import './loader.css';
import loaderAnimation from './../../img/loaderAnimation.gif';

const Loader = () => {
    return (
        <div className="flex p-10 justify-center">
            {/*<div className="loader"></div>*/}
            <img className="h-80" src={ loaderAnimation } alt=""/>
        </div>
    );
};

export default Loader;
