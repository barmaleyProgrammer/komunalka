import { useEffect, useState } from 'react';
import arrow_right from '../img/arrow_right.svg';
import arrow_left from '../img/arrow_left.svg';
import { bannersList } from "../api2";

const BannersBottom = () => {
    const [banners, setBanners] = useState([]);
    useEffect( () => {
        bannersList().then((result) => setBanners(result));
    }, []);

    return (
        <div className="relative border border-[#E7E7E7] mt-32 h-[141px]">
            <img className="arrow_left_partners" src={arrow_left} alt=""/>
            <div className="flex w-[893px] mt-8 h-20 justify-between mx-auto">
                {
                    banners.map((item, key) => {
                        return (
                            <div key={ key } className="w-auto text-center">
                                <a href={ item.url }>
                                <img src={ item.image } alt="" className="mx-auto"/>
                               <div className="">
                                   { item.title }
                               </div>
                                </a>
                            </div>

                        );
                    })
                }
            </div>
            <img className="arrow_right_partners" src={arrow_right} alt=""/>
        </div>
    );
};

export default BannersBottom;