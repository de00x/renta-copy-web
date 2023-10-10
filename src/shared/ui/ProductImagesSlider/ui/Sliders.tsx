import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation, Thumbs } from 'swiper';
import React, { useState } from 'react';
import './Sliders.scss';
import Arrow from 'assets/icons/arrow.svg?react';

interface Slider {
    photos: string[]
}

export const Sliders = (props: Slider) => {
    const { photos } = props;
    const [imagesNavSlider, setImagesNavSlider] = useState(null);
    return (

        <section className="slider">
            <div className="slider__flex">
                <div className="slider__col">
                    <Arrow className="slider__prev" />
                    <div className="slider__thumbs">
                        <Swiper
                            onSwiper={setImagesNavSlider}
                            direction="vertical"
                            spaceBetween={24}
                            slidesPerView={3}
                            navigation={{
                                nextEl: '.slider__next',
                                prevEl: '.slider__prev',
                            }}
                            className="swiper-container1"
                            breakpoints={{
                                0: {
                                    direction: 'horizontal',
                                },
                                768: {
                                    direction: 'vertical',
                                },
                            }}
                            modules={[Navigation, Thumbs]}
                        >
                            {photos?.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="slider__image">
                                        <img src={slide} alt="" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <Arrow className="slider__next" />
                </div>

                <div className="slider__images">
                    <Swiper
                        thumbs={{ swiper: imagesNavSlider }}
                        direction="horizontal"
                        slidesPerView={1}
                        spaceBetween={32}
                        mousewheel
                        navigation={{
                            nextEl: '.slider__next',
                            prevEl: '.slider__prev',
                        }}
                        breakpoints={{
                            0: {
                                direction: 'horizontal',
                            },
                            768: {
                                direction: 'horizontal',
                            },
                        }}
                        className="swiper-container2"
                        modules={[Navigation, Thumbs, Mousewheel]}
                    >
                        {photos?.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="slider__image">
                                    <img src={slide} alt="" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};
