// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                heading={`Order Online`}
                subHeading={`From 11.00am to 10.00pm`}
            ></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                // centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper my-20"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white shadow-lg' >salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="">
                    </img>
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white shadow-lg' >pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt=""></img>
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white shadow-lg' >soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt=""></img>
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white shadow-lg' >deserrts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt=""></img>
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white shadow-lg' >salad</h3>
                </SwiperSlide>
            </Swiper>
        </section >
    );
};

export default Category;