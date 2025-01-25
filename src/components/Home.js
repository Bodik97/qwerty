import React, { useState, useRef } from 'react';
import shotImage from '../img/shot.jpg';
import { Menu } from './Menu';
import OrderForm from './OrderForm';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const formRef = useRef(null);

  const handleScrollToForm = () => {
    window.scrollTo({
      top: formRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${shotImage})` }}
    >
      {/* Якщо меню відкрите – затемнюємо екран */}
      {isMenuOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" />}

      {/* Основний контент */}
      <div className="relative z-10 text-center text-yellow-300 py-16">
        <h1 className="text-5xl font-bold mb-4">Тотальний розпродаж...</h1>
        <h2 className="text-5xl text-red-600 font-bold mb-4">Знижки до -50%</h2>
        <p className="text-4xl font-mono mb-8">Зброя без дозволу тільки тут</p>

        <div className="flex justify-center mb-14 mt-24">
          <div className="flex justify-between gap-10"> {/* gap-4 задає мінімальний відступ між кнопками */}
            <button
              onClick={toggleMenu}
              className="bg-blue-500 text-white py-3 px-6 rounded-lg
                transform transition-transform duration-300 ease-in-out
                hover:scale-105"
            >
              Переглянути асортимент
            </button>
            <button
              onClick={handleScrollToForm}
              className="bg-orange-500 text-white py-3 px-6 rounded-lg
                transform transition-transform duration-300 ease-in-out
                hover:scale-105"
            >
              Отримати консультацію
            </button>
          </div>
        </div>


        <div className="flex justify-center mb-6">
          
        </div>

        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={toggleMenu}
            className="w-12 h-12 bg-blue-500 text-white rounded-full
                       flex flex-col items-center justify-center
                       transform transition-transform duration-300
                       ease-in-out hover:scale-105"
          >
            <div className="w-6 h-1 bg-white mb-1"></div>
            <div className="w-6 h-1 bg-white mb-1"></div>
            <div className="w-6 h-1 bg-white"></div>
          </button>
        </div>
        

        {/* Бокове меню */}
        <Menu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          handleScrollToSection={handleScrollToSection}
        />
      </div>
      {/* Форма консультації з іншим заголовком */}
      <div ref={formRef}>
        <OrderForm heading="Отримати консультацію"
            successMessage="Дякуємо! Ваш запит прийнято, ми скоро зв’яжемося з вами!." />
      </div>
    </div>
  );
};

export default Home;
