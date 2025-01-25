// src/components/Products.js

import React from 'react';
import Reviews from './Reviews';

// Імпортуємо зображення з папки src/img
import coldGun1 from '../img/B1-4P/1.jpg';
import coldGun2 from '../img/B1-4P/1.jpg';
import pneumatic1 from '../img/B1-4P/1.jpg';
import pneumatic2 from '../img/B1-4P/1.jpg';
import rifle1 from '../img/B1-4P/1.jpg';
import automatic1 from '../img/B1-4P/1.jpg';
import bow1 from '../img/B1-4P/1.jpg';
import crossbow1 from '../img/B1-4P/1.jpg';
import holster1 from '../img/B1-4P/1.jpg';
import cleaning1 from '../img/B1-4P/1.jpg';
import knife1 from '../img/B1-4P/1.jpg';
import knife2 from '../img/B1-4P/1.jpg';

// Компонент для відображення окремої картки товару
const ProductCard = ({ title, image, description }) => (
  <div className="product-card bg-white shadow-lg p-4 rounded-lg">
    <img
      src={image}
      alt={title}
      className="w-full h-40 object-cover rounded-md mb-4"
    />
    <h3 className="text-xl font-bold">{title}</h3>
    <p>{description}</p>
    <div className="flex justify-between mt-4">
      <button className="bg-green-500 text-white py-2 px-4 rounded-lg">
        Замовити
      </button>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
        Детальніше
      </button>
    </div>
  </div>
);

// Основний компонент, що відображає всі секції з товарами,
// а також підключає компонент Reviews у кінці
const Products = () => {
  // Масив секцій з товарами
  const sections = [
    {
      id: 'cold-guns',
      title: 'Охолоджені пістолети',
      products: [
        {
          title: 'Пістолет Cold 1',
          image: coldGun1,
          description: 'Короткий опис пістолета 1',
        },
        {
          title: 'Пістолет Cold 2',
          image: coldGun2,
          description: 'Короткий опис пістолета 2',
        },
      ],
    },
    {
      id: 'pneumatic-guns',
      title: 'Пневматичні пістолети',
      products: [
        {
          title: 'Пістолет Pneumatic 1',
          image: pneumatic1,
          description: 'Опис пневматичного пістолета 1',
        },
        {
          title: 'Пістолет Pneumatic 2',
          image: pneumatic2,
          description: 'Опис пневматичного пістолета 2',
        },
      ],
    },
    {
      id: 'rifles-and-automatics',
      title: 'Гвинтівки та Автомати',
      products: [
        {
          title: 'Гвинтівка Rifle 1',
          image: rifle1,
          description: 'Опис гвинтівки 1',
        },
        {
          title: 'Автомат Automatic 1',
          image: automatic1,
          description: 'Опис автомата 1',
        },
      ],
    },
    {
      id: 'bows-and-crossbows',
      title: 'Луки та арбалети',
      products: [
        {
          title: 'Лук Bow 1',
          image: bow1,
          description: 'Опис лука 1',
        },
        {
          title: 'Арбалет Crossbow 1',
          image: crossbow1,
          description: 'Опис арбалета 1',
        },
      ],
    },
    {
      id: 'holsters',
      title: 'Кобури, догляд та інші',
      products: [
        {
          title: 'Кобура Holster 1',
          image: holster1,
          description: 'Опис кобури 1',
        },
        {
          title: 'Засіб догляду Cleaning 1',
          image: cleaning1,
          description: 'Опис засобу догляду',
        },
      ],
    },
    {
      id: 'knives',
      title: 'Ножі',
      products: [
        {
          title: 'Ніж Knife 1',
          image: knife1,
          description: 'Опис ножа 1',
        },
        {
          title: 'Ніж Knife 2',
          image: knife2,
          description: 'Опис ножа 2',
        },
      ],
    },
  ];

  return (
    <div>
      {/* Рендеримо кожну секцію з товарами */}
      {sections.map((section) => (
        <div
          key={section.id}
          id={section.id} // для прокрутки з бокового меню
          className="container mx-auto py-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            {section.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {section.products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      ))}

      {/* Підключаємо компонент із слайдером відгуків */}
      <Reviews />
    </div>
  );
};

export default Products;
