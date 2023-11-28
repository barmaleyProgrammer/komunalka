import { useEffect } from 'react';
import './modalRegister.css';
import icon_close from '../../img/icon_close.svg';

// https://www.youtube.com/watch?v=i2Yf7JZonB4
const ModalRegister = ({close, children}) => {
    useEffect( () => {
        document.body.style.overflow = 'hidden';
        window.addEventListener('keyup', (event) => {
            if (event.key === 'Escape') {
                close();
            }
        });
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);

    return (
        <div className="modalRegister">
            <div className="modal__contentRegister" onClick={e => e.stopPropagation()}>
                <div className="icon_close" onClick={close}>
                    <img src={icon_close} alt="" />
                </div>
                {children}
            </div>
        </div>
    );
};

export default ModalRegister;
