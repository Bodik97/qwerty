import React, { useState, useRef } from "react";
import { Menu } from "./Menu";
import OrderForm from "./OrderForm";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const formRef = useRef(null);

  // Відкрити/закрити меню
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Прокрутка до OrderForm
  const scrollToForm = () => {
    if (formRef.current) {
      window.scrollTo({
        top: formRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Прокрутка до довільної секції за ідентифікатором
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/da27wfewm/image/upload/v1738406444/n7azkgophnl7h3e5yn5b.jpg')`,
        }}
      >
        {/* Затемнення фону, коли меню відкрите */}
        {isMenuOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" />}

        <div className="relative z-10 text-center text-yellow-300 py-2">
          <h1 className="text-5xl font-bold mb-4">Тотальний розпродаж...</h1>
          <h2 className="text-5xl text-red-600 font-bold mb-4">Знижки до -50%</h2>
          <p className="text-4xl font-mono mb-8">Зброя без дозволу тільки тут</p>

          <div className="flex justify-center mb-14 mt-24">
            <div className="flex justify-between gap-10">
              <button
                onClick={toggleMenu}
                className="bg-blue-500 text-white py-3 px-6 rounded-lg 
                           transform transition-transform duration-300 ease-in-out hover:scale-105"
              >
                Переглянути асортимент
              </button>

              <button
                onClick={scrollToForm}
                className="bg-orange-500 text-white py-3 px-6 rounded-lg 
                           transform transition-transform duration-300 ease-in-out hover:scale-105"
              >
                Отримати консультацію
              </button>
            </div>
          </div>

          {/* Кнопка-гамбургер */}
          <div className="absolute top-4 right-4 z-50">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              className="w-14 h-14 bg-blue-500 text-white rounded-full 
                         transform transition-transform duration-300 ease-in-out hover:scale-105 
                         fixed top-5 right-5 flex flex-col items-center justify-center"
            >
              <div
                className={`w-8 h-1 bg-white mb-1 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></div>
              <div
                className={`w-8 h-1 bg-white mb-1 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-8 h-1 bg-white transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></div>
            </button>
          </div>

          {/* Бокове меню */}
          <Menu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            handleScrollToSection={scrollToSection}
          />
        </div>
      </div>

      {/* Розміщуємо форму нижче. ref={formRef} для прокрутки. */}
      <div ref={formRef}>
        <OrderForm
          heading="Отримати консультацію"
          successMessage="Дякуємо! Ваш запит прийнято, ми скоро зв’яжемося з вами!"
        />
      </div>
    </>
  );
};

export default Home;
