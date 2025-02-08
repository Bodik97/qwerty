// ProductSlider.js
import React, { useMemo, forwardRef } from 'react';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Zoom from 'react-medium-image-zoom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-medium-image-zoom/dist/styles.css';

// Дефолтні налаштування слайдера
const DEFAULT_SLIDER_SETTINGS = {
  dots: true,
  arrows: false, // Вбудовані стрілки вимкнені, бо ми керуємо слайдером зовні
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  adaptiveHeight: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ProductSlider = forwardRef(
  (
    { slides = [], customSettings = {}, className = '', containerStyle = {} },
    ref
  ) => {
    // Об'єднуємо дефолтні налаштування з кастомними
    const mergedSettings = useMemo(
      () => ({ ...DEFAULT_SLIDER_SETTINGS, ...customSettings }),
      [customSettings]
    );

    if (!slides || slides.length === 0) {
      return (
        <div style={containerStyle} className={className}>
          No images available.
        </div>
      );
    }

    return (
      <div
        style={{ ...containerStyle, position: 'relative' }}
        className={className}
      >
        <Slider ref={ref} {...mergedSettings}>
          {slides.map((item) => (
            <div key={item.id} className="px-6" style={{ height: '100%' }}>
              <div
                style={{ height: '100%' }}
                className="bg-white dark:bg-gray-950 rounded-lg shadow-xl p-6 flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 w-full mb-4 md:mb-0">
                  <Zoom>
                    <LazyLoadImage
                      src={item.image}
                      alt={item.title || 'Slide image'}
                      effect="blur"
                      className="rounded cursor-pointer"
                      style={{
                        maxWidth: '350px',
                        maxHeight: '480px',
                        objectFit: 'cover',
                      }}
                    />
                  </Zoom>
                </div>
                <div className="md:w-1/2 w-full md:pl-6 text-center md:text-left">
                  {item.title && (
                    <h3 className="text-2xl font-semibold mb-3 dark:text-white">
                      {item.title}
                    </h3>
                  )}
                  {item.description && (
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
);

export default ProductSlider;
