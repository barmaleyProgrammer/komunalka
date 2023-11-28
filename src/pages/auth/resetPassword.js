import {useContext, useState} from "react";
import InputField from "../../components/inputField";
import logo_lichylnyk from "../../img/logo_lichylnyk.svg";
import Button from "../../components/button";
import api from "../../api";
import {Context} from "../../store";

const ResetPasswordRequest = ( {close} ) => {
    const [,dispatch] = useContext(Context);

    const [modalActive, setModalActive] = useState(false);
    const [form, setForm] = useState({
        email: (process.env.NODE_ENV === 'development') ? 'grebenyukvd@gmail.com' : '',
        source: (process.env.NODE_ENV === 'development') ? 'localhost_3000' : '2',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };
    const Submit = async (event) => {
        event.preventDefault();
            await api.resetPasswordRequest(form.email, form.source).then((result) => {
                if (result.status === 200) {
                    setModalActive(true);
                }
            }).catch((error) => {
                dispatch({ type: 'error', payload: error });
            });
    };

    return (
        <div className="mt-10 p-10 w-[464px]">
            <img src={logo_lichylnyk} className="h-16 mb-8 mx-auto" alt="Flowbite Logo" />
            <h4 className="text-black_figma text-center">Відновлення пароля</h4>
            { modalActive ?
                <div>
                    <div className="text-xs text-black_figma p-5 text-center w-full">
                        <p className="text-left text-base">Будь ласка, перевірте свою електронну пошту, та натисніть на посилання.
                            Не забудьте перевірити папку «Спам», якщо лист не зʼявиться в основній скринці.
                            <br/> З повагою, команда LYCHYLNYK.</p>
                    </div>
                    <div className="pt-2 w-44 mx-auto">
                        <Button type="button" label={'Ok'} cssType={'primary'} onClick={close} />
                    </div>
                </div>
                :
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
