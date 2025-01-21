import React, { useState } from 'react';
import { FaWhatsapp, FaTelegram, FaViber } from 'react-icons/fa'; // Імпорт іконок
import ReactDOM from 'react-dom'; // Для порталу
import shotImage from '../img/shot.jpg'; // Відносний шлях від компонента до зображення


const Home = () => {
  // Стейт для відкриття/закриття каталогу
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  // Функція для відкриття каталогу
  const handleOpenCatalog = () => {
    setIsCatalogOpen(true);
  };

  // Функція для закриття каталогу
  const handleCloseCatalog = () => {
    setIsCatalogOpen(false);
  };

  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${shotImage})` }}>
      {/* Перекриття для заморожування фону, якщо каталог відкритий */}
      {isCatalogOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      )}

      <div className="relative z-10 text-center text-yellow-300 py-32">
        <h1 className="text-5xl font-bold mb-4">Тотальний розпродаж діє до 23:00</h1>
        <h2 className="text-5xl text-red-600 font-bold mb-4">Знижки до -50%</h2>
        <p className="text-4xl font-mono mb-8">Зброя яка не потребує дозволу тільки тут👇</p>

        {/* Кнопка для відкриття каталогу */}
        <div className="flex justify-center">
          <button 
            onClick={handleOpenCatalog} 
            className="bg-blue-500 text-white py-3 px-6 rounded-lg"
          >
            Переглянути асортимент
          </button>
        </div>

        {/* Рендеримо каталог через портал, якщо відкрито */}
        {isCatalogOpen && ReactDOM.createPortal(
          <div className="absolute left-0 top-0 w-1/4 h-full bg-white shadow-lg p-6 z-50">
            {/* Кнопка для закриття каталогу */}
            <button 
              onClick={handleCloseCatalog} 
              className="absolute top-4 right-4 text-2xl text-gray-600"
            >
              ✖
            </button>

            {/* Логотип та посилання */}
            <div className="flex flex-col items-center mt-2">
              <img src="your-logo-url.png" alt="Logo" className="mt-10 mb-10" />
              <a href="#cold-guns" className="text-xl text-gray-900 mb-5">Охолоджені пістолети</a>
              <a href="#pneumatic-guns" className="text-xl text-gray-900 mb-5">Пневматичні пістолети</a>
              <a href="#bows" className="text-xl text-gray-900 mb-5">Луки та арбалети</a>
              <a href="#rifles" className="text-xl text-gray-900 mb-5">Гвинтівки</a>
              <a href="#gas-bottles" className="text-xl text-gray-900 mb-5">Газові балони</a>
              <a href="#holsters" className="text-xl text-gray-900 mb-5">Кобури, догляд та інші</a>
              <a href="#knives" className="text-xl text-gray-900 mb-5">Ножі</a>
              <a href="#reviews" className="text-xl text-gray-900 mb-5">Відгуки</a>
            </div>


            {/* Месенджери */}
            <div className="flex justify-between mt-10">
              <a href="https://wa.me/1234567890" className="bg-green-500 text-white py-3 px-8 rounded-full flex items-center">
                <FaWhatsapp className="mr-1" />
              </a>
              <a href="https://t.me/username" className="bg-blue-500 text-white py-3 px-8 rounded-full flex items-center">
                <FaTelegram className="mr-1" />
              </a>
              <a href="viber://chat?number=1234567890" className="bg-purple-500 text-white py-3 px-8 rounded-full flex items-center">
                <FaViber className="mr-1" />
              </a>
            </div>

          </div>,
          document.body // Рендеримо портал в body
        )}
      </div>
    </div>
  );
};

export default Home;
