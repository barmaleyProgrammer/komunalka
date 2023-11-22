import rectangle from "../img/rectangle.png";
import rectangle_ from "../img/Rectangle_.png";
import {NavLink} from "react-router-dom";
import NewsList from "./news"
import {useState} from "react";
import arrowLeftCurrentNews from "../img/arrowLeftCurrentNews.svg";
import arrowRightCurrentNews from "../img/arrowRightCurrentNews.svg";

const list_imgs = [
    { image: '/news/News1.png',
    news: '1'},
    { image: '/news/News2.png',
    news: '2'},
    { image: '/news/News3.png',
        news: '3' },
    { image: '/news/News4.png',
        news: '4' },
    { image: '/news/News5.png',
        news: '5' },
    { image: '/news/News6.png',
        news: '6' },
    { image: '/news/News7.png',
        news: '7' },
    { image: '/news/News8.png',
        news: '8' },
    { image: '/news/News9.png',
        news: '9' },
    { image: '/news/News10.png',
        news: '10' },
    { image: '/news/News11.png',
        news: '11' },
    { image: '/news/News12.png',
        news: '12' },
    { image: '/news/News13.png',
        news: '13' },
    { image: '/news/News14.png',
        news: '14' },
    { image: '/news/News15.png',
        news: '15' },
];


const CurrentNews = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage] = useState(3);

    const lastNewsIndex = currentPage * newsPerPage;
    const firstNewsIndex = lastNewsIndex - newsPerPage;
    const newsOnPage = list_imgs.slice(firstNewsIndex, lastNewsIndex);
    // console.log(newsOnPage);
    const paginate = newsNumber => setCurrentPage(newsNumber)

    const PaginationCurrentNews = () => {
        const newsNumber = []
        for (let i = 1; i <= Math.ceil(list_imgs.length / newsPerPage); i++) {
            newsNumber.push(i)
        }

        const nextPage = () => {
            const val = currentPage + 1;
            if (newsNumber.length >= val) {
                paginate(val);
            }
        };

        const prevPage = () => {
            const val = currentPage - 1;
            if (val > 0) {
                paginate(val);
            }
        }

        return (
            <div className="relative">
                <img className="arrowRightCurrentNews cursor-pointer" src={arrowRightCurrentNews} alt="" onClick={nextPage}/>
                <img className={` ${ currentPage === 1 ? 'hidden' : 'arrowLeftCurrentNews cursor-pointer'}`} src={arrowLeftCurrentNews} alt="" onClick={prevPage}/>
            </div>
        );

    };
    const NewsList = () => {
        return (
            <div className="grid grid-cols-3 mb-8 gap-x-5">
                {
                    newsOnPage.map((item, key) => {
                        return (
                            <div key={key}>
                                <NavLink to={`/news/${key}`}>
                                    <h2>новина № {item.news}</h2>
                                    <img className="rounded-lg mt-4" src={item.image} alt=""/>
                                </NavLink>
                            </div>
                        );
                    })
                }
            </div>
        );
    };
    return (
        <>
            <h1 className="mt-5 text-2xl">Інструкції зі зняття показників для новачків</h1>
            <p className="text-sm font-extralight mt-4">14.08.2023</p>
            <img className="mt-4" src={rectangle} alt=""/>
            <div className="w-[956px] mx-auto">
                <p className="mt-4 font-light mb-2">Лічильники – це незамінна частина нашого повсякденного життя,
                    забезпечуючи облік
                    та контроль витрат ресурсів, таких як електроенергія, вода, газ та тепло.
                    Правильне занесення та передача показань лічильника мають важливе значення
                    для точного обліку та оптимізації витрат. У цій статті ми розглянемо деякі практичні
                    поради про те, як правильно записати та передати показання лічильника.
                </p>
                <ul className="list-decimal list-inside">
                    <li className="font-medium">Регулярність та Час Запису</li>
                    <p className="font-light mb-2">Перший крок до успішного обліку показань лічильника – це
                        встановити регулярний час для їх запису.
                        Виберіть зручний для себе час, наприклад, наприкінці кожного місяця.
                        Це дозволить вам стежити за змінами витрат ресурсів та своєчасно виявляти будь-які
                        аномалії.</p>
                    <li className="font-medium">Точне записування</li>
                    <p className="font-light mb-2">Під час запису показань лічильника завжди прагнете максимальної
                        точності.
                        Запишіть усі цифри, починаючи з лівої позиції і рухаючись до правої.
                        Не пропускайте жодної цифри та звертайте увагу на дрібні частини, якщо вони є.</p>
                    <li className="font-medium">Правильне Округлення</li>
                    <p className="font-light mb-2">Залежно від типу лічильника, можливо, буде потрібно округлення.
                        Переконайтеся, що ви знаєте, як правильно округляти показання.
                        Наприклад, деякі лічильники округляються до найближчого цілого числа, інші -
                        до певної кількості знаків після коми.</p>
                    <li className="font-medium">Перевірка на незвичайні значення</li>
                    <p className="font-light mb-2">Перед записом показань лічильника важливо перевірити,
                        чи немає незвичайних значень чи помилок. Якщо показання видаються надто високими або
                        низькими в порівнянні з попередніми періодами, слід провести додаткову
                        перевірку або звʼязатися з постачальником послуг.</p>
                    <li className="font-medium">Збереження доказів</li>
                    <p className="font-light mb-2">Зберігайте докази ваших записів, як-от фотографії або нотатки.
                        Це може стати в нагоді у випадку суперечок або розбіжностей із постачальником послуг.</p>
                    <li className="font-medium">Онлайн Передача</li>
                    <p className="font-light mb-2">Багато постачальників послуг надають можливість надсилати
                        покази лічильника онлайн. Це зручний та швидкий спосіб уникнути помилок під час передачі
                        даних.</p>
                    <li className="font-medium">Уважність при передачі</li>
                    <p className="font-light mb-2">Якщо ви передаєте показання лічильника особисто або по телефону,
                        будьте уважні та чітко передавайте цифри. Уточніть, що оператор їх правильно записав.</p>
                    <li className="font-medium">Своєчасна Передача</li>
                    <p className="font-light mb-2">Надайте показання лічильника у встановлений термін.
                        Це дозволить уникнути штрафів чи проблем із виставленням рахунків.</p>
                    <li className="font-medium">Автоматизація процесу</li>
                    <p className="font-light mb-2">Якщо це можливо, розгляньте варіант автоматизації процесу
                        зчитування показань лічильника. Існують пристрої та програми, які можуть робити це за
                        вас.</p>
                    <li className="font-medium">Взаємодія з Постачальником Послуг</li>
                    <p className="font-light mb-2">Не соромтеся звертатися до постачальника послуг із запитаннями
                        або проблемами,
                        повʼязаними із записом та передачею показань лічильника.
                        Вони готові допомогти вам розібратися та надати необхідну інформацію.</p>
                </ul>
                <p className="mt-4 font-light">Правильне записування та передача показань лічильника –
                    це важливий аспект ефективного обліку ресурсів та контролю витрат.
                    Дотримуючись вказаних вище порад, ви забезпечите точність та надійність даних,
                    що сприяє економії та оптимізації споживання.
                </p>
                <img className="mt-4" src={rectangle_} alt=""/>
                <h2 className="text-xl mt-2">Як передати показання лічильника води?</h2>
                <p className="mt-4 font-light">Є кілька способів. Найзручніший варіант — зняти показання
                    лічильника холодної води та приладу для обліку гарячої та передати дані постачальнику послуги
                    через інтернет за допомогою сервісу LICHYLNYK. Сервіс надає змогу передавати інформацію про
                    фактичне споживання води, газу та електроенергії в режимі он-лайн.</p>
                <p className="mt-8 font-light">Ця функція доступна в особистому кабінеті.
                    Щоб скористатися послугою, слід пройти просту процедуру реєстрації на сайті Лічильник.</p>
            </div>
            <div className="w-[305px] h-12 mx-auto mt-5 mb-5">
                <NavLink to="/cabinet" className="py-3.5 px-5 mr-2 mb-2 text-sm rounded text-white_figma bg-yellow_figma">
                    Передати показання лічильників
                </NavLink>
            </div>
            <div>
                <h2 className="text-xl mt-2 mb-4 font-medium">Радимо почитати</h2>
                <hr className="w-full text-borderColor mb-2"/>
                    <div className="relative">
                        <PaginationCurrentNews/>
                    </div>
                <NewsList/>
            </div>
        </>
    );
}

export default CurrentNews;