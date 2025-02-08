import React, { useState } from "react";

function OrderModal({ show, onClose, product }) {
  // 1) Усі хуки на верхньому рівні
  const [quantity, setQuantity] = useState(1);
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");

  // Логіка зміни кількості
  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => Math.max(q - 1, 1));

  // Обробка форми
  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      product,
      quantity,
      user: {
        name: userName,
        phone: phone,
      },
    };
    console.log("Замовлення:", orderData);
    alert("Ваше замовлення відправлено!");
    onClose();
  };

  // Якщо show = false, не рендеримо взагалі
  if (!show) return null;
  // Якщо product немає, теж можна повернути null
  if (!product) return null;

  const totalSum = product.price * quantity;

  return (
    <div
      // Оверлей (фон, що затінює)
      className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center
                 transition-opacity duration-300"
      // Закриття при кліку на фон
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        // Контейнер модалки з анімацією «масштабування»
        className="relative bg-white w-full max-w-lg p-6 rounded-lg shadow-lg z-10
                   transform transition-transform duration-300 scale-95 hover:scale-100"
      >
        {/* Хрестик (закриття) */}
        <button
          className="absolute top-2 right-2 text-gray-600 text-2xl font-bold 
                     focus:outline-none hover:text-red-500 transition-colors"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Заголовок */}
        <h2 className="text-2xl font-semibold text-center mb-4">
          Ваше замовлення
        </h2>

        {/* Товар */}
        <div className="flex items-center mb-6">
          {product.image ? (
            <img
              src={product.image}
              alt={product.title}
              className="w-16 h-16 object-cover rounded mr-4"
            />
          ) : (
            <div className="w-16 h-16 bg-gray-200 flex items-center justify-center mr-4">
              <span className="text-gray-500 text-sm">no image</span>
            </div>
          )}
          <div>
            <p className="font-semibold">{product.title}</p>
            <p className="text-gray-600">
              {new Intl.NumberFormat("uk-UA").format(product.price)} грн
            </p>
          </div>
        </div>

        {/* Кількість */}
        <div className="flex items-center justify-between mb-4">
          {/* Кнопки + / - */}
          <div className="flex items-center gap-2">
            <button
              className="px-3 py-1 border rounded hover:bg-gray-100"
              onClick={decrement}
            >
              -
            </button>
            <span className="font-medium text-lg">{quantity}</span>
            <button
              className="px-3 py-1 border rounded hover:bg-gray-100"
              onClick={increment}
            >
              +
            </button>
          </div>
          {/* Підсумок */}
          <p className="text-xl font-semibold">
            Сума: {new Intl.NumberFormat("uk-UA").format(totalSum)} грн
          </p>
        </div>

        {/* Форма оформлення */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Ваше ім'я:</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded outline-none focus:ring"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Номер телефону:</label>
            <input
              type="tel"
              className="w-full px-3 py-2 border rounded outline-none focus:ring"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-2 rounded mt-2 hover:bg-slate-800
                       transition-colors"
          >
            Замовити
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrderModal;
