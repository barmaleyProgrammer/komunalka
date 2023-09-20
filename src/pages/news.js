import list_imgs from "../components/assets/list_imgs";
import Breadcrumbs from "../components/breadcrumbs";

// const News = () => {
//     return (
// <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//     <div>
//         <img className="h-auto max-w-full rounded-lg"
//              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
//     </div>
//     <div>
//         <img className="h-auto max-w-full rounded-lg"
//              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
//     </div>
//     <div>
//         <img className="h-auto max-w-full rounded-lg"
//              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
//     </div>
//     <div>
//         <img className="h-auto max-w-full rounded-lg"
//              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
//     </div>
//     <div>
//         <img className="h-auto max-w-full rounded-lg"
//              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
//     </div>
//     <div>
//         <img className="h-auto max-w-full rounded-lg"
//              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt=""/>
//     </div>
//     <div>
//         <img className="h-auto max-w-full rounded-lg"
//              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt=""/>
//     </div>
//     <div>
//         <img className="h-auto max-w-full rounded-lg"
//              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt=""/>
//     </div>
//     <div>
//         <img className="h-auto max-w-full rounded-lg"
//              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt=""/>
//     </div>
//     <div>
//         <img className="h-auto max-w-full rounded-lg"
//              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt=""/>
//     </div>
//     <div>
//         <img className="h-auto max-w-full rounded-lg"
//              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt=""/>
//     </div>
//     <div>
//         <img className="h-auto max-w-full rounded-lg"
//              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt=""/>
//     </div>
// </div>
// );
// };
//
const News = () => {
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


