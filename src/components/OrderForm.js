import React, { useState } from 'react';

function OrderForm({
  heading = 'Зробіть замовлення',
  successMessage = 'Ваше замовлення було успішно надіслано!',
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Валідація даних
  const validateForm = () => {
    if (!name || !phone) {
      setError('Будь ласка, заповніть всі поля.');
      return false;
    }
    const phonePattern = /^[0-9]{10}$/;
    if (!phone.match(phonePattern)) {
      setError('Будь ласка, введіть коректний номер телефону (10 цифр).');
      return false;
    }
    return true;
  };

  // Обробка відправлення форми
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Симуляція запиту до сервера
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setName('');
      setPhone('');
    }, 1500);
  };

  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto max-w-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">{heading}</h2>

        {success && (
          <p className="text-green-500 text-center mb-4">
            {successMessage}
          </p>
        )}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              id="name"
              type="text"
              placeholder="Ваше ім'я"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
              aria-required="true"
            />
          </div>

          <div>
            <input
              id="phone"
              type="tel"
              placeholder="Ваш номер телефону"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
              aria-required="true"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Обробка...' : 'Замовити'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default OrderForm;
