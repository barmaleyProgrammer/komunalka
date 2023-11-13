import Breadcrumbs from "../components/breadcrumbs";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import rectangle from './../img/rectangle.png';
import rectangle_ from './../img/Rectangle_.png';
import {useState} from "react";
import Pagination from "../components/pagination";
import arrow_right from "../img/arrow_right.svg";
import arrow_left from "../img/arrow_left.svg";

const list_imgs = [
    { image: '/news/News1.png' },
    { image: '/news/News2.png' },
    { image: '/news/News3.png' },
    { image: '/news/News4.png' },
    { image: '/news/News5.png' },
    { image: '/news/News6.png' },
    { image: '/news/News7.png' },
    { image: '/news/News8.png' },
    { image: '/news/News9.png' },
    { image: '/news/News10.png' },
    { image: '/news/News11.png' },
    { image: '/news/News12.png' },
    { image: '/news/News13.png' },
    { image: '/news/News14.png' },
    { image: '/news/News15.png' },
];

const breadCrumbs = [
    {
        "to": '/',
        "label": 'Головна'
    },
    {
        "to": '',
        "label": 'Новини'
    },
];

const News = () => {
    const { id } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage] = useState(3);

    const lastNewsIndex = currentPage * newsPerPage;
    const firstNewsIndex = lastNewsIndex - newsPerPage;
    const newsOnPage = list_imgs.slice(firstNewsIndex, lastNewsIndex);
    console.log(newsOnPage);
    const paginate = newsNumber => setCurrentPage(newsNumber)
    const nextPage = () => setCurrentPage( prev => prev + 1)
    const prevPage = () => setCurrentPage( prev => prev - 1)

    const NewsList = () => {
        return (
            <div className="grid grid-cols-3 mb-8">
                {
                    newsOnPage.map((item, key) => {
                        return (
                            <div key={key}>
                                <NavLink to={`/news/${key}`}>
                                    <img className="rounded-lg mt-4" src={item.image} alt=""/>
                                </NavLink>
                            </div>
                        );
                    })
                }
            </div>
        );
    };

    const CurrentNews = () => {

        return (
            <>
                <h1 className="mt-5 text-2xl">Інструкції зі зняття показників для новачків</h1>
                <p className="text-sm font-extralight mt-4">14.08.2023</p>
                <img className="mt-4" src={rectangle} alt=""/>
                <div className="w-[956px] mx-auto">
                    <p className="mt-4 font-light mb-2">Лічильники – це незамінна частина нашого повсякденного життя, забезпечуючи облік
                        та контроль витрат ресурсів, таких як електроенергія, вода, газ та тепло.
                        Правильне занесення та передача показань лічильника мають важливе значення
                        для точного обліку та оптимізації витрат. У цій статті ми розглянемо деякі практичні
                        поради про те, як правильно записати та передати показання лічильника.
                    </p>
                        <ul className="list-decimal list-inside">
                            <li className="font-medium">Регулярність та Час Запису</li>
                            <p className="font-light mb-2">Перший крок до успішного обліку показань лічильника – це встановити регулярний час для їх запису.
                                Виберіть зручний для себе час, наприклад, наприкінці кожного місяця.
                                Це дозволить вам стежити за змінами витрат ресурсів та своєчасно виявляти будь-які аномалії.</p>
                            <li className="font-medium">Точне записування</li>
                            <p className="font-light mb-2">Під час запису показань лічильника завжди прагнете максимальної точності.
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
                                покази лічильника онлайн. Це зручний та швидкий спосіб уникнути помилок під час передачі даних.</p>
                            <li className="font-medium">Уважність при передачі</li>
                            <p className="font-light mb-2">Якщо ви передаєте показання лічильника особисто або по телефону,
                                будьте уважні та чітко передавайте цифри. Уточніть, що оператор їх правильно записав.</p>
                            <li className="font-medium">Своєчасна Передача</li>
                            <p className="font-light mb-2">Надайте показання лічильника у встановлений термін.
                                Це дозволить уникнути штрафів чи проблем із виставленням рахунків.</p>
                            <li className="font-medium">Автоматизація процесу</li>
                            <p className="font-light mb-2">Якщо це можливо, розгляньте варіант автоматизації процесу
                                зчитування показань лічильника. Існують пристрої та програми, які можуть робити це за вас.</p>
                            <li className="font-medium">Взаємодія з Постачальником Послуг</li>
                            <p className="font-light mb-2">Не соромтеся звертатися до постачальника послуг із запитаннями або проблемами,
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
            </>
        )
    }

    return (
        <div>
            <Breadcrumbs items={ breadCrumbs } />
            { id ? <CurrentNews />
                :
                <div>
                <NewsList />
                    <div className="relative">
                        <Pagination newsPerPage={newsPerPage} totalNews={list_imgs.length} paginate={paginate}/>
                        <img className="arrow_next_news" src={arrow_left} alt="" onClick={nextPage}/>
                        <img className="arrow_prev_news" src={arrow_right} alt="" onClick={prevPage}/>
                    </div>
                </div>
            }
        </div>
    )
};
export default News;
