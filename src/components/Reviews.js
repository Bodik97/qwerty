// src/components/Reviews.js
import React, { useMemo } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Зображення (переконайтеся, що шляхи вірні!)
import reviewImg1 from '../img/1.jpg';
import reviewImg2 from '../img/2.jpg';
import reviewImg3 from '../img/3.jpg';
import reviewImg4 from '../img/4.jpg';
import reviewImg5 from '../img/5.jpg';
import reviewImg6 from '../img/6.jpg';
import reviewImg7 from '../img/7.jpg';

// Масив відгуків (дані)
const reviewsData = [
  {
    id: 1,
    image: reviewImg1,
    title: 'Відгук №1',
    description: 'Текст відгуку або коментар №1...',
  },
  {
    id: 2,
    image: reviewImg2,
    title: 'Відгук №2',
    description: 'Текст відгуку або коментар №2...',
  },
  {
    id: 3,
    image: reviewImg3,
    title: 'Відгук №3',
    description: 'Текст відгуку або коментар №3...',
  },
  {
    id: 4,
    image: reviewImg4,
    title: 'Відгук №4',
    description: 'Текст відгуку або коментар №4...',
  },
  {
    id: 5,
    image: reviewImg5,
    title: 'Відгук №5',
    description: 'Текст відгуку або коментар №5...',
  },
  {
    id: 6,
    image: reviewImg6,
    title: 'Відгук №6',
    description: 'Текст відгуку або коментар №6...',
  },
  {
    id: 7,
    image: reviewImg7,
    title: 'Відгук №7',
    description: 'Текст відгуку або коментар №7...',
  },
];

// Кастомні стрілки
const PrevArrow = ({ className, onClick }) => (
  <button
    className={`
      ${className}
      left-2 z-10 text-xl text-white bg-black/50
      rounded-full p-2 hover:bg-black focus:outline-none
      transition-colors duration-300
    `}
    onClick={onClick}
    aria-label="Previous slide"
  >
    <FaArrowLeft />
  </button>
);

const NextArrow = ({ className, onClick }) => (
  <button
    className={`
      ${className}
      right-2 z-10 text-xl text-white bg-black/50
      rounded-full p-2 hover:bg-black focus:outline-none
      transition-colors duration-300
    `}
    onClick={onClick}
    aria-label="Next slide"
  >
    <FaArrowRight />
  </button>
);

// Налаштування слайдера
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
  ],
};

// Основний компонент
const Reviews = () => {
  const customPaging = useMemo(
    () => (i) => (
      <div className="w-16 h-16 p-1">
        <LazyLoadImage
          src={reviewsData[i].image}
          alt={`Thumbnail ${i}`}
          effect="blur"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    ),
    []
  );

  const settings = {
    ...sliderSettings,
    customPaging,
    dotsClass: 'slick-dots custom-thumb-dots',
  };

  return (
    <section id="reviews" className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Відгуки</h2>

      <Slider {...settings}>
        {reviewsData.map((review) => (
          <div key={review.id} className="px-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 w-full mb-4 md:mb-0">
                <LazyLoadImage
                  src={review.image}
                  alt={review.title}
                  effect="blur"
                  className="w-full h-auto rounded"
                />
              </div>
              <div className="md:w-1/2 w-full md:pl-6 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-3 dark:text-white">
                  {review.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {review.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Reviews;