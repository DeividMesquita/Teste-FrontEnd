// Carousel.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";

function Carousel() {
const slides = [
    {
        img: "/img/1.png",
        alt: "Margot Robbie",
        name: "Margot Robbie",
        role: "Barbie"
    },
    {
        img: "/img/2.png",
        alt: "Ryan Gosling",
        name: "Ryan Gosling",
        role: "Ken"
    },
    {
        img: "/img/3.png",
        alt: "America Ferrera",
        name: "America Ferrera",
        role: "Gloria"
    },
    {
        img: "/img/4.png",
        alt: "Kate McKinnon",
        name: "Kate McKinnon",
        role: "Barbie estranha"
    },
    {
        img: "/img/5.png",
        alt: "Ariana Greenblatt",
        name: "Ariana Greenblatt",
        role: "Sasha"
    },
    {
        img: "/img/6.png",
        alt: "Michael Cera",
        name: "Michael Cera",
        role: "Allan"
    },
    {
        img: "/img/7.png",
        alt: "Will Ferrell",
        name: "Will Ferrell",
        role: "Mattel CEO"
    },
    {
        img: "/img/8.png",
        alt: "Issa Rae",
        name: "Issa Rae",
        role: "Barbie presidente"
    },
    {
        img: "/img/9.png",
        alt: "Alexandra Shipp",
        name: "Alexandra Shipp",
        role: "Barbie escritora"
    }
];

return (
    <div className="container-xxl carousel mt-5 mb-5">
        <Swiper
            spaceBetween={20}
            slidesPerView={6}
            loop={false}
            modules={[]}
            navigation={false}
            pagination={false}
            breakpoints={{
                320: { slidesPerView: 2 },
                480: { slidesPerView: 4 },
                1200: { slidesPerView: 6 }
            }}
        >
            {slides.map((slide, idx) => (
                <SwiperSlide key={idx}>
                    <div className="carousel__item">
                        <figure className="carousel__img">
                            <img src={slide.img} alt={slide.alt} />
                            <figcaption className="d-flex flex-column align-items-center mt-4">
                                <h3>{slide.name}</h3>
                                <p>{slide.role}</p>
                            </figcaption>
                        </figure>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
);
}

export default Carousel;
