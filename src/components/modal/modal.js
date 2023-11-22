import { useEffect } from 'react';
import './modal.css';
import icon_close from '../../img/icon_close.svg';

// https://www.youtube.com/watch?v=i2Yf7JZonB4
const Modal = ({close, children}) => {
    useEffect( () => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);

    return (
        // <div className="modal" onClick={close}>
            <div className="modal">
                <div className="modal__content" onClick={e => e.stopPropagation()}>
                    <div className="icon_close" onClick={close}>
                        <img src={icon_close} alt=""/>
                    </div>
                    {children}
                </div>
            </div>
        // </div>
    );
};

export default Modal;