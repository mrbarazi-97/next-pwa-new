import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import Image from 'next/image';

export function SwiperSlider() {
  SwiperCore.use([Pagination]);
  return (
    <div>
      <Swiper
        className="flex flex-row items-center mt-8 max-w-6xl mx-auto"
        slidesPerView={3}
        spaceBetween={60}
        // centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 0,
          },
          400: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 0,
          },
          480: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide className="swiper-slide">
          <div>
            <Image
              className=""
              src="/assets/images/banner/options__images_banner_01.png"
              alt=""
              loading="lazy"
              width={340}
              height={148}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div>
            <Image
              className=""
              src="/assets/images/banner/options__images_banner_02.png"
              alt=""
              loading="lazy"
              width={340}
              height={148}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div>
            <Image
              className=""
              src="/assets/images/banner/options__images_banner_03.png"
              alt=""
              loading="lazy"
              width={340}
              height={148}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div>
            <Image
              className=""
              src="/assets/images/banner/options__images_banner_04.png"
              alt=""
              loading="lazy"
              width={340}
              height={148}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
