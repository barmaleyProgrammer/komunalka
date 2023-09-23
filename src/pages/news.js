import Breadcrumbs from "../components/breadcrumbs";

const News = () => {
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
    ]

    const breadCrumbs = [
        {
            "to": '/',
            "label": 'Головна'
        },
        {
            "to": '',
            "label": 'Новини'
        },
    ]
    return (
        <>
            <div className="ml-64 mb-4">
                <Breadcrumbs items={breadCrumbs}/>
            </div>
            <div className="w-[70%] mx-auto grid grid-flow-row grid-cols-5 gap-10">
                {list_imgs.map((item, index) =>
                    <div key={index}>
                        <img className="h-auto w-60 rounded-lg" src= {item.image } alt=""/>
                    </div>
                )}
            </div>
        </>
    )
};
export default News;
