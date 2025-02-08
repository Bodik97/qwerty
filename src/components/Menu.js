import React from 'react';
import ReactDOM from 'react-dom';

export const Menu = ({ isMenuOpen, setIsMenuOpen, handleScrollToSection }) => {
  if (!isMenuOpen) return null;

  const closeMenu = () => {
    setIsMenuOpen(false); // Закриваємо меню
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 transition-all duration-500 ease-in-out transform">
      <div className="bg-white w-4/12 sm:w-80 md:w-96 h-full shadow-lg rounded-l-lg transform transition-transform duration-500 ease-in-out animate-slideInRight">
        {/* Кнопка закриття з анімацією обертання */}
        <button
          onClick={closeMenu}
          className="absolute top-3 right-4 w-12 h-12 bg-gray-700 text-white rounded-full flex items-center justify-center
                    transition-all duration-300 ease-in-out 
                    transform hover:rotate-180 hover:text-yellow-300 hover:scale-125"
        >
          <span className="text-3xl font-bold">×</span>
        </button>
        <div className="p-16">
          <ul className="mt-10 space-y-6 text-2xl text-gray-700">
            {/* Секції меню */}
            <li 
              onClick={() => { handleScrollToSection('pneumatic-rifles'); closeMenu(); }} 
              className="cursor-pointer hover:text-blue-500 transition-colors duration-300 hover:scale-105"
            >
              Пневматичні гвинтівки
            </li>
            <li 
              onClick={() => { handleScrollToSection('cold-guns'); closeMenu(); }} 
              className="cursor-pointer hover:text-blue-500 transition-colors duration-300 hover:scale-105"
            >
              Охолоджені пістолети
            </li>
            <li 
              onClick={() => { handleScrollToSection('rifles-and-automatics'); closeMenu(); }} 
              className="cursor-pointer hover:text-blue-500 transition-colors duration-300 hover:scale-105"
            >
              Гвинтівки та Автомати
            </li>
            <li 
              onClick={() => { handleScrollToSection('bows-and-crossbows'); closeMenu(); }} 
              className="cursor-pointer hover:text-blue-500 transition-colors duration-300 hover:scale-105"
            >
              Луки та арбалети
            </li>
            <li 
              onClick={() => { handleScrollToSection('holsters'); closeMenu(); }} 
              className="cursor-pointer hover:text-blue-500 transition-colors duration-300 hover:scale-105"
            >
              Кобури, догляд та інші
            </li>
            <li 
              onClick={() => { handleScrollToSection('knives'); closeMenu(); }} 
              className="cursor-pointer hover:text-blue-500 transition-colors duration-300 hover:scale-105"
            >
              Ножі
            </li>
            <li 
              onClick={() => { handleScrollToSection('reviews'); closeMenu(); }} 
              className="cursor-pointer hover:text-blue-500 transition-colors duration-300 hover:scale-105"
            >
              Відгуки
            </li>
          </ul>
        </div>

        {/* Блок із посиланнями на месенджери */}
        <div className="absolute bottom-16 left-0 right-0 p-6 flex justify-center items-center space-x-6">
          {/* Telegram */}
          <a
            href="https://t.me/Ваш_Telegram"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 
                     hover:scale-125 hover:translate-y-2"
            title="Написати в Telegram"
          >
            <svg
              className="w-12 h-12 fill-current text-blue-500"
              viewBox="0 0 512 512"
            >
              <path d="M 492.38 70.46 c -6.54 -5.43 -15.51 -6.94 -23.51 -3.98 L 34.89 212.25 c -11.54 4.09 -19.17 14.98 -19.4 27.13 s 7.23 23.43 18.61 28.1 l 98.94 40.38 l 31.77 110.58 c 3.25 11.33 13.63 19.22 25.37 19.22 c 0.69 0 1.39 -0.03 2.09 -0.09 c 11.71 -0.88 21.34 -9.28 23.58 -20.74 l 21.07 -105.46 l 135.52 113.13 c 8.2 6.85 19.47 8.34 29.07 3.82 c 9.61 -4.52 15.95 -13.86 15.95 -24.33 V 94.69 C 499.48 83.84 498.92 75.88 492.38 70.46 Z M 456.95 402.02 c 0 2.71 -3.06 4.35 -5.28 2.6 L 267.74 272.57 l 0.01 0 l -42.71 -35.65 l -28.41 142.27 c -0.5 2.52 -2.65 2.89 -3.48 2.89 c -0.81 0 -2.92 -0.23 -3.62 -2.87 l -33.25 -115.71 l 223.92 -133.22 c 7.39 -4.4 16.56 4.54 12.33 11.81 L 275.09 262.64 c -2.23 3.96 -1.15 8.97 2.52 11.84 l 164.86 137.27 C 453.93 413.52 456.95 410.69 456.95 402.02 Z" />
            </svg>
          </a>

          {/* Viber */}
          <a
            href="viber://chat?number=Ваш_номер"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 
                       hover:scale-125 hover:translate-y-2"
            title="Написати у Viber"
          >
            <svg
              className="w-12 h-12 fill-current text-purple-600"
              viewBox="0 0 512 512"
            >
              <path d="M407.56,3.24H104.44A93.56,93.56,0,0,0,10.88,96.8V415.2a93.56,93.56,0,0,0,93.56,93.56H407.56A93.56,93.56,0,0,0,501.12,415.2V96.8A93.56,93.56,0,0,0,407.56,3.24ZM413.45,343.54c-4.41,12-25.17,22.79-43.82,24.79-11.67,1.19-26.69,2.28-77.44-16.72-67.07-26.5-110.49-91.44-113.84-95.74s-27.25-36.26-27.25-56.17,17.26-24.23,23.45-27.59c6.36-3.45,13.49-4.51,17.77,1.34s20.37,25.2,21.77,27.06,2.92,6,0.58,9.56c-2.63,3.73-3.91,5.8-7.84,9.3s-5.57,5.82-2.37,11.2a191.51,191.51,0,0,0,34.46,42.3c23.65,21,36.53,26.44,42.84,29.48,6.36,3,10.09,2.58,13.82-1.16s6.37-6.72,9.61-10.94,4.08-7.82,6.36-9.39,5.64-2.1,9.05,0.58,23.47,13.79,27.49,16.28,6.67,3.74,7.63,5.81S417.86,331.61,413.45,343.54Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};
