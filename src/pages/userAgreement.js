import './userAgreement.css';
import Breadcrumbs from "../components/breadcrumbs";

const breadCrumbs = [
    {
        "to": '/',
        "label": 'Головна'
    },
    {
        "to": '',
        "label": 'Угода користувача'
    },
]
const UserAgreement = () => {
    return (
        <div className="mx-auto w-[1152px]">
            <div>
                <Breadcrumbs items={breadCrumbs}/>
            </div>
            <h1 className="mt-5 mb-5 text-2xl font-normal not-italic">Угода користувача</h1>
            <p className="text-base mb-8 font-light">Ця Угода Користувача (далі - «Угода») укладається між Користувачем (будь-якою дієздатною фізичною особою або юридичною особою)
                та комунальним концерном «Центр комунального сервісу»
                (далі – Концерн) і регулює питання використання інтернет-сайту cks.com.ua та або інших доменних імен (далі - «Сайт»).</p>

            <div className="agreement">
                <ol>
                    <li className="text-lg font-light leading-10">
                        <b>Загальна частина</b>
                        <ol className="text-base font-light leading-10">
                            <li>При використанні Сайту та/або будь-якої його частини, Користувач автоматично погоджується з умовами даної Угоди.</li>
                            <li>Користувач зобовʼязаний ознайомитися з Угодою перед використанням Сайту.</li>
                            <li>При використанні будь-якої частини Сайту, Користувач погоджується з умовами даної Угоди.</li>
                            <li>Умови Угоди поширюються на всіх користувачів Сайту.</li>
                        </ol>
                    </li>
                    <li className="text-lg font-normal leading-10">
                        <b>Права, обов’язки та відповідальність Користувача та Концерну</b>
                        <ol className="text-base font-light leading-10">
                            <li>При використанні Сайту та/або будь-якої його частини, Користувач автоматично погоджується з умовами даної Угоди.</li>
                            <li>Користувач зобовʼязаний ознайомитися з Угодою перед використанням Сайту.</li>
                            <li>При використанні будь-якої частини Сайту, Користувач погоджується з умовами даної Угоди.</li>
                            <li>Умови Угоди поширюються на всіх користувачів Сайту.</li>
                        </ol>
                    </li>
                </ol>
            </div>

        </div>
    );
};

export default UserAgreement;