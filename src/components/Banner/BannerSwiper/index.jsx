import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.scss';

import {Autoplay, Pagination, Navigation} from 'swiper/modules';
import {FaLongArrowAltRight} from "react-icons/fa";

export default function BannerSwiper() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className={"swiper-wrapper"}>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h2>We're Always Here To Give Financial Help!</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there
                            live the blind texts.</p>
                        <a>GET STARTED
                            <FaLongArrowAltRight/>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={"swiper-slide1"}>
                    <div className={"swiper-wrapper"}>
                        <h2>Build Your Financial Plan With Our Specialists</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there
                            live the blind texts.</p>
                        <a>GET STARTED
                            <FaLongArrowAltRight/>
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
