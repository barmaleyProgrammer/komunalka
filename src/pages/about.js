import Breadcrumbs from "../components/breadcrumbs";

const About = () => {
    const breadCrumbs = [
        {
            "to": '/',
            "label": 'Головна'
        },
        {
            "to": '',
            "label": 'Про нас'
        },
    ]
    return (
        <div className="w-[1152px] px-20 py-3 mx-auto">
            <div className="mb-4">
                <Breadcrumbs items={breadCrumbs}/>
            </div>
            <h2 className="text-2xl mb-4">Про нас</h2>
            <div className="text-sm">
                <p>Основною метою діяльності Концерну – є відкриття та організація роботи сервісних центрів для обслуговування
                    споживачів з усіх питань надання житлово-комунальних послуг. Створення мережі сервісних центрів – це,
                    в першу чергу, необхідність стандартизувати роботу усіх точок прийому споживачів з питань ЖКГ,
                    які на сьогодні працюють. Організація роботи центрів - це потреба часу та змін, які відбулися в
                    системі визначення нових виконавців послуг. Створення таких центрів комунального сервісу сприятиме
                    підвищенню та покращенню сфери обслуговування споживачів у частині отримання консультацій та
                    інформації з усіх питань ЖКГ. Основний акцент сервісних центрів робиться на наданні
                    професійних консультацій споживачам з питань житлово-комунального господарства.
                    Новий сервіс також передбачає підвищення якості стандартів обслуговування, а саме:
                </p>
                <ul className="list-disc p-3 pl-3">
                    <li>ввічливе ставлення до споживачів</li>
                    <li>швидкість та якість надання консультацій</li>
                    <li>створення комфортних умов очікування</li>
                    <li>мінімальні черги</li>
                </ul>
                <p>Пріоритетним також буде створення нових форматів обслуговування:</p>
                <ul className="list-disc p-3 pl-3">
                    <li>можливість попереднього запису до спеціалістів за телефоном або через інтернет (економія часу й зусиль)</li>
                    <li>отримання інформації «не виходячи з дому» (по телефону, електронною поштою тощо)</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
