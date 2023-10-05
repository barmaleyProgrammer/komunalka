import './modal.css';
import icon_close from '../../img/icon_close.svg';

// https://www.youtube.com/watch?v=i2Yf7JZonB4
const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className="icon_close" onClick={() => setActive(false)}>
                    <img src={icon_close} alt=""/>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;