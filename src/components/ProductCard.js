import React, { useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import OrderModal from './OrderModal';

const ProductCard = ({
  title,
  description,
  price,
  oldPrice,
  images = [],
  characteristics = [],
  specialOffer,
  pushOffer = [],
}) => {
  // Стан для головного зображення
  const [selectedImage, setSelectedImage] = useState(images[0] || '');

  // Стан для відкриття/закриття модального вікна
  const [showModal, setShowModal] = useState(false);

  // Обчислення знижки (якщо є стара ціна)
  const discountPercentage = oldPrice
    ? Math.round(((oldPrice - price) / oldPrice) * 100)
    : 0;

  // Функція для зміни вибраного зображення
  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  // Відкриття модалки, можна передати додаткові дані
  const handleBuyNow = () => {
    setShowModal(true);
  };

  // Закриття модалки
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <article className="bg-white shadow-lg rounded-lg p-10 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Ліва частина: зображення товару */}
        <div className="flex-1">
          {selectedImage ? (
            <Zoom
              zoomMargin={40}
              overlayBgColorStart="rgba(0, 0, 0, 0.4)"
              overlayBgColorEnd="rgba(0, 0, 0, 0.8)"
              transitionDuration={300}
            >
              <img
                src={selectedImage}
                alt={title}
                className="w-full h-96 object-contain rounded-lg mb-8 transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer"
                loading="lazy"
              />
            </Zoom>
          ) : (
            <div className="w-full h-96 flex items-center justify-center bg-gray-100 rounded-lg mb-8">
              <span className="text-gray-500">No image available</span>
            </div>
          )}

          {images.length > 1 && (
            <div className="flex gap-4 justify-center mt-6">
              {images.map((imgSrc, idx) => (
                <button
                  key={idx}
                  onClick={() => handleImageClick(imgSrc)}
                  className="focus:outline-none"
                  aria-label={`Select image ${idx + 1}`}
                >
                  <img
                    src={imgSrc}
                    alt={`Thumbnail ${idx + 1}`}
                    className={`w-16 h-16 object-cover rounded-lg transition-all duration-200 ${
                      selectedImage === imgSrc
                        ? 'border-2 border-gray-500'
                        : 'hover:border-2 hover:border-gray-300'
                    }`}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Права частина: інформація про товар */}
        <div className="flex-1">
          <header className="mb-6">
            <h1 className="text-4xl font-semibold text-gray-900 mb-4">{title}</h1>
          </header>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">{description}</p>

          {/* Блок із ціною */}
          <div className="flex items-center gap-6 mb-6">
            <span className="text-4xl font-bold text-red-600">
              {new Intl.NumberFormat('uk-UA').format(price)} грн
            </span>
            {oldPrice && (
              <>
                <span className="text-xl text-gray-500 line-through">
                  {new Intl.NumberFormat('uk-UA').format(oldPrice)} грн
                </span>
                <span className="text-xl text-green-600">
                  - {discountPercentage}%
                </span>
              </>
            )}
          </div>

          {/* Кнопка "Купити зараз" */}
          <div className="text-center mt-4">
            <button
              onClick={handleBuyNow}
              className="bg-[#0f172a] text-white px-20 py-3 rounded-xl text-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-lg animate-colorFlow"
              aria-label="Купити зараз"
            >
              Купити зараз
            </button>
          </div>

          {/* Блок характеристик та додаткових пропозицій у два стовпчики */}
          {(characteristics.length > 0 || pushOffer.length > 0) && (
            <div className="mt-10 grid grid-cols-2 gap-8">
              {characteristics.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Характеристики:
                  </h2>
                  <ul className="list-none pl-6 space-y-3">
                    {characteristics.map((item, index) => (
                      <li key={index} className="text-gray-700 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {pushOffer.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Можна докупити:
                  </h2>
                  <ul className="list-none pl-6 space-y-3">
                    {pushOffer.map((item, index) => (
                      <li key={index} className="text-gray-700 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Блок спеціальної пропозиції */}
      {specialOffer && (
        <div className="mt-10 p-6 bg-yellow-100 border-l-4 border-yellow-600 text-yellow-950">
          {Array.isArray(specialOffer) ? (
            specialOffer.map((offer, index) => (
              <p key={index} className="text-xl font-normal">
                {offer}
              </p>
            ))
          ) : (
            <p className="text-xl font-normal">{specialOffer}</p>
          )}
        </div>
      )}

      {/* Підключаємо OrderModal, передаючи потрібні пропси */}
      <OrderModal
        show={showModal}
        onClose={closeModal}
        product={{
          title,
          price,
          image: selectedImage,
        }}
      />
    </article>
  );
};

export default ProductCard;
