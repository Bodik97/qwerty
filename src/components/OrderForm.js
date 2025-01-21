const OrderForm = () => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Зробіть замовлення</h2>
          <form className="space-y-6">
            <input type="text" placeholder="Ваше ім'я" className="w-full p-4 border border-gray-300 rounded-lg" />
            <input type="tel" placeholder="Ваш номер телефону" className="w-full p-4 border border-gray-300 rounded-lg" />
            <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg">Замовити</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default OrderForm;
  