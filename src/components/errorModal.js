import Button from './button';
import Modal from './modal/modal';
import icon_error from '../img/icon_error.svg';

const ErrorModal = ({error, close}) => {
    return (
        <Modal close={close}>
            <div className="mx-auto p-10 mt-4">
                <img className="mx-auto mt-4" src={ icon_error } alt=""/>
                <p className="text-center mt-6">Нажаль, сталася наступна помилка:</p>
                <div className="text-red-950 text-base text-center mb-8">{ error.message }</div>
                <div className="">
                    <Button type="submit" label={'Ok'} onClick={close} cssType={'primary'} />
                </div>
            </div>
        </Modal>
    );
};

export default ErrorModal;
