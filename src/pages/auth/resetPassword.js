import { useState } from "react";
import InputField from "../../components/inputField";
import { useNavigate } from "react-router-dom";
import logo_lichylnyk from "../../img/logo_lichylnyk.svg";
import Button from "../../components/button";
import api from "../../api";
import Modal from "../../components/modal/modal";

const ResetPasswordRequest = () => {
    const [validateFlag, setValidateFlag] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: (process.env.NODE_ENV === 'development') ? 'grebenyukvd@gmail.com' : '',
        source: (process.env.NODE_ENV === 'development') ? 'localhost_3000' : '2',
    });
    const [formError, setFormError] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };
    const Submit = async (event) => {
        event.preventDefault();
        try {
            const result = await api.resetPasswordRequest(form.email, form.source);
            if (result.status === 200) {
                setValidateFlag(true);
                setModalActive(true);
            }
            // navigate('/');
        }

        catch (e) {
                setFormError(e);
            }
    };

    return (
        <div className="mt-10 p-10 mx-auto rounded-lg shadow-lg w-[464px]">
            <img src={logo_lichylnyk} className="h-16 mb-8 mx-auto" alt="Flowbite Logo" />
            <h4 className="text-black_figma text-center">Відновлення пароля</h4>
            <div className="text-xs text-red-900 text-center">{formError}</div>
            { validateFlag ?
                <Modal active={modalActive} setActive={setModalActive}>
                    <div className="text-xs text-black_figma p-5 text-center w-[572px] h-auto">
                        <h1 className="mb-5 text-lg font-medium">Підтвердження акаунту</h1>
                        <h3 className="mb-3 text-left text-base">Дякуємо за реєстрацію! </h3>
                        <p className="text-left text-base">Будь ласка, перевірте свою електронну пошту та підтвердіть свою реєстрацію,
                            щоб розпочати користуватися нашим сервісом. Не забудьте перевірити папку «Спам»,
                            якщо лист не зʼявиться в основній скринці.<br/> З повагою, команда LYCHYLNYK.</p>
                        {/*<p className="text-left text-base mt-4 underline underline-offset-4">Надіслати мені лист повторно</p>*/}
                    </div>
                    <div className="pt-2 w-44 mx-auto">
                        <Button type="button" label={'Ok'} cssType={'primary'} onClick={() => setModalActive(false)} />
                    </div>
                </Modal> :
            <form className="space-y-2" action="#" autoComplete="off" onSubmit={Submit}>
                <InputField
                    type={'email'}
                    placeholder={'Введіть свій email'}
                    name={'email'}
                    required={true}
                    value={form.email}
                    onChange={handleInputChange}
                />
                <Button type="submit" label={'Надіслати'} cssType={'primary'} />
            </form>
            }
        </div>
    );
};

export default ResetPasswordRequest;
