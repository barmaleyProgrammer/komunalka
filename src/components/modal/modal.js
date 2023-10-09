import './modal.css';
import icon_close from '../../img/icon_close.svg';

// https://www.youtube.com/watch?v=i2Yf7JZonB4
const Modal = ({close, children}) => {
    return (
        <div className="modal active" onClick={close}>
            <div className="modal__content active" onClick={e => e.stopPropagation()}>
                <div className="icon_close" onClick={close}>
                    <img src={icon_close} alt=""/>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;