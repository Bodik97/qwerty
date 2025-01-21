import React from 'react';

const Products = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Наші пропозиції</h2>

        {/* Категорії товарів */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Охолоджені пістолети */}
          <div id="cold-guns" className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mt-4">Охолоджені пістолети</h3>
            <img src="your-product-image.jpg" alt="Product" className="w-full h-48 object-cover rounded-md" />
            <p className="text-lg text-gray-600 mt-2">Опис товару</p>
            <div className="flex justify-around mt-2">
            <button className="bg-slate-800 text-white py-2 px-6 mt-4 rounded-lg">Детальніше</button>
            <button className="bg-blue-500 text-white py-2 px-10 mt-4 rounded-lg">Купити</button>
            </div>
          </div>
          {/* Охолоджені пістолети */}
          <div id="cold-guns" className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mt-4">Охолоджені пістолети</h3>
            <img src="your-product-image.jpg" alt="Product" className="w-full h-48 object-cover rounded-md" />
            <p className="text-lg text-gray-600 mt-2">Опис товару</p>
            <div className="flex justify-around mt-2">
            <button className="bg-slate-800 text-white py-2 px-6 mt-4 rounded-lg">Детальніше</button>
            <button className="bg-blue-500 text-white py-2 px-10 mt-4 rounded-lg">Купити</button>
            </div>
          </div>
          {/* Охолоджені пістолети */}
          <div id="cold-guns" className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mt-4">Охолоджені пістолети</h3>
            <img src="your-product-image.jpg" alt="Product" className="w-full h-48 object-cover rounded-md" />
            <p className="text-lg text-gray-600 mt-2">Опис товару</p>
            <div className="flex justify-around mt-2">
            <button className="bg-slate-800 text-white py-2 px-6 mt-4 rounded-lg">Детальніше</button>
            <button className="bg-blue-500 text-white py-2 px-10 mt-4 rounded-lg">Купити</button>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-8">Наші пропозиції</h2>
          {/* Пневматичні пістолети */}
          <div id="pneumatic-guns" className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mt-4">Пневматичні пістолети</h3>
            <img src="your-product-image.jpg" alt="Product" className="w-full h-48 object-cover rounded-md" />
            <p className="text-lg text-gray-600 mt-2">Опис товару</p>
            <div className="flex justify-around mt-2">
            <button className="bg-slate-800 text-white py-2 px-6 mt-4 rounded-lg">Детальніше</button>
            <button className="bg-blue-500 text-white py-2 px-10 mt-4 rounded-lg">Купити</button>
            </div>
          </div>

          {/* Луки та арбалети */}
          <div id="bows" className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mt-4">Луки та арбалети</h3>
            <img src="your-product-image.jpg" alt="Product" className="w-full h-48 object-cover rounded-md" />
            <p className="text-lg text-gray-600 mt-2">Опис товару</p>
            <div className="flex justify-around mt-2">
            <button className="bg-slate-800 text-white py-2 px-6 mt-4 rounded-lg">Детальніше</button>
            <button className="bg-blue-500 text-white py-2 px-10 mt-4 rounded-lg">Купити</button>
            </div>
          </div>

          {/* Інші категорії товарів */}
          
        </div>
      </div>
    </section>
  );
};

export default Products;
