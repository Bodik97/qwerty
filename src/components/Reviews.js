import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// Ліниве завантаження: імпорт компоненту та стилів
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// Стилі для slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




// Імпорт зображень (приклад)
import reviewImg1 from '../img/1.jpg';
import reviewImg2 from '../img/2.jpg';
import reviewImg3 from '../img/5.jpg';

// Дані слайдера
const reviewsData = [
  {
    id: 1,
    image: reviewImg1,
    title: 'Відгук №1',
    description: 'Коментар до першої фотографії...',
  },
  {
    id: 2,
    image: reviewImg2,
    title: 'Відгук №2',
    description: 'Детальніший опис другого відгуку...',
  },
  {
    id: 3,
    image: reviewImg3,
    title: 'Відгук №3',
    description: 'Короткий опис третього відгуку...',
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
    aria-label="Previous"
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
    aria-label="Next"
  >
    <FaArrowRight />
  </button>
);

const Reviews = () => {
  // Кастомний контент для dots (мініатюри)
  const customPaging = (i) => {
    const review = reviewsData[i];
    return (
      <div className="w-16 h-16 p-1">
        <LazyLoadImage
          src={review.image}
          alt={`Thumbnail ${review.id}`}
          effect="blur"
          className="w-full h-full object-cover rounded-md
                     border-2 border-transparent
                     hover:border-blue-500
                     transition duration-300"
        />
      </div>
    );
  };

  // Налаштування слайдера
  const settings = {
    dots: true,
    customPaging: customPaging,
    dotsClass: 'slick-dots custom-thumb-dots',
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,       // плавний перехід (розчинення)
    autoplay: false,  // можна ввімкнути true
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    swipeToSlide: true,
    // Якщо не хочете бачити всі слайди одразу, не включайте centerMode
    // centerMode: false,
    // centerPadding: '0',
  };

  return (
    <section id="reviews" className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Відгуки</h2>

      <Slider {...settings}>
        {reviewsData.map((review) => (
          <div key={review.id} className="px-2">
            {/* «Коробка» — картка з картинкою і описом */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center">
              {/* Зображення */}
              <div className="md:w-1/2 w-full mb-4 md:mb-0">
                <LazyLoadImage
                  src={review.image}
                  alt={review.title}
                  effect="blur"
                  className="w-full h-auto rounded"
                />
              </div>
              {/* Опис */}
              <div className="md:w-1/2 w-full md:pl-6 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-3">{review.title}</h3>
                <p className="text-gray-700 leading-relaxed">
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
