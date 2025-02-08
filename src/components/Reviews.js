// Reviews.js
import React, { useMemo, useCallback, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ProductSlider from './Slider/ProductSlider';

// Дані відгуків
const reviewsData = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/da27wfewm/image/upload/v1738448200/reviews/nr0wekjnamuzncvw7seo.jpg',
    title: 'Олесксандр Мохич',
    description: 'Військовий',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/da27wfewm/image/upload/v1738448200/reviews/cj4beuvkvdsubukucbj4.jpg',
    title: 'Сергій Ребко',
    description: 'Військовий',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/da27wfewm/image/upload/v1738448200/reviews/pjxfcejmddjcnlra1fmw.jpg',
    title: 'Володмир Коско',
    description: 'Військовий',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/da27wfewm/image/upload/t_Balonchik/reviews/nuyuas9n5o57lsmkxwf3',
    title: 'Олексій куренко',
    description: 'Мисливець',
  },
  {
    id: 5,
    image:
      'https://res.cloudinary.com/da27wfewm/image/upload/v1738448200/reviews/rvwcz0dd8j7codagwh8r.jpg',
    title: 'Євген Капчук',
    description: 'Військовий',
  },
  {
    id: 6,
    image:
      'https://res.cloudinary.com/da27wfewm/image/upload/v1738448200/reviews/oauyfv9jqiaxwravwpcy.jpg',
    title: 'Роман Куран',
    description: 'Військовий',
  },
  // Інші відгуки...
];

const Reviews = () => {
  // Створюємо ref для слайдера
  const sliderRef = useRef(null);

  // Функція для створення мініатюр (custom paging)
  const customPaging = useCallback(
    (index) => (
      <div className="w-14 h-14 p-2">
        <img
          src={reviewsData[index].image}
          alt={`Thumbnail ${index + 1}`}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    ),
    []
  );

  // Налаштування слайдера (вбудовані стрілки вимкнені)
  const advancedSettings = useMemo(
    () => ({
      fade: true,
      adaptiveHeight: false,
      arrows: false, // вимикаємо вбудовані стрілки
      customPaging,
      dotsClass: 'slick-dots custom-thumb-dots',
      appendDots: (dots) => <div>{dots}</div>,
    }),
    [customPaging]
  );

  // Стиль контейнера для слайдера
  const sliderContainerStyle = {
    width: '800px',
    height: '500px',
    margin: '0 auto',
    position: 'relative', // для позиціонування кнопок
  };

  return (
    <section id="reviews" className="container mx-auto py-20 px-4">
      <h2 className="text-7xl font-normal text-center mb-6">Відгуки</h2>
      <div style={sliderContainerStyle} className="relative">
        {/* Компонент слайдера */}
        <ProductSlider
          ref={sliderRef}
          slides={reviewsData}
          customSettings={advancedSettings}
          containerStyle={{ height: '100%' }}
        />
        {/* Кнопки, винесені поза слайдером */}
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute -left-12 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 focus:outline-none"
        >
          <FaArrowLeft className="text-white text-xl" />
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute -right-12 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 focus:outline-none"
        >
          <FaArrowRight className="text-white text-xl" />
        </button>
      </div>
    </section>
  );
};

export default Reviews;
