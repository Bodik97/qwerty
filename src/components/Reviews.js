import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// Ліниве завантаження (зображення)
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// Стилі для slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Приклад зображень
import reviewImg1 from '../img/1.jpg';
import reviewImg2 from '../img/2.jpg';
import reviewImg3 from '../img/3.jpg';
import reviewImg4 from '../img/4.jpg';
import reviewImg5 from '../img/5.jpg';
import reviewImg6 from '../img/6.jpg';
import reviewImg7 from '../img/7.jpg';

// Масив відгуків
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

// Кастомна стрілка «Назад»
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

// Кастомна стрілка «Вперед»
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
          alt={`Thumbnail ${i}`}
          effect="blur"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    );
  };

  // Налаштування слайдера
  const settings = {
    dots: true,              // Відображати «точки» (dots)
    customPaging: customPaging,  // Використовуємо кастомні мініатюри
    dotsClass: 'slick-dots custom-thumb-dots',
    infinite: true,          // Безкінечна прокрутка
    speed: 500,              // Швидкість анімації
    slidesToShow: 1,         // Тільки один слайд одночасно
    slidesToScroll: 1,
    fade: true,              // Плавне розчинення між слайдами
    autoplay: true,          // Автопрокручування
    arrows: true,            // Показуємо стрілки
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    swipeToSlide: true,      // Дозволяємо свайп
    responsive: [
      {
        breakpoint: 768,        // Для мобільних екранів
        settings: {
          slidesToShow: 1,      // 1 слайд для мобільних
          slidesToScroll: 1,
          arrows: false,        // Вимикаємо стрілки, хай гортають свайпом
        },
      },
    ],
  };

  return (
    <section id="reviews" className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Відгуки</h2>

      <Slider {...settings}>
        {reviewsData.map((review) => (
          <div key={review.id} className="px-2">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center">
              {/* Зображення зліва */}
              <div className="md:w-1/2 w-full mb-4 md:mb-0">
                <LazyLoadImage
                  src={review.image}
                  alt={review.title}
                  effect="blur"
                  className="w-full h-auto rounded"
                />
              </div>
              {/* Опис справа */}
              <div className="md:w-1/2 w-full md:pl-6 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-3">{review.title}</h3>
                <p className="text-gray-700">{review.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Reviews;
