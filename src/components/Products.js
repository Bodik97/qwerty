import React, { useState } from 'react'; // Importing React and useState hook



// Example image imports
import coldGun1 from '../img/B1-4P/1.jpg';
import coldGun2 from '../img/B1-4P/1.jpg';
// ... other imports

const ProductCard = ({
  title,
  image,
  imageHover,
  description,
  price,
  oldPrice,
}) => {
  // State for hover effect
  const [isHovered, setIsHovered] = useState(false);

  // Functions to handle mouse hover
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Calculate discount percentage if old price exists
  const discountPercentage = oldPrice
    ? Math.round(((oldPrice - price) / oldPrice) * 100)
    : 0;

  return (
    <div
      className="product-card bg-white shadow-lg rounded-lg overflow-hidden relative transition-all duration-300 hover:scale-105 hover:shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Display the image, changing on hover */}
      <img
        src={isHovered ? imageHover : image}
        alt={title}
        className="w-full h-64 object-cover rounded-t-lg mb-4 transition-transform duration-300 transform hover:scale-110"
      />

      <div className="px-6 pb-6">
        {/* Product title */}
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-2">
          {title}
        </h3>

        {/* Product description */}
        <p className="text-sm text-gray-600 text-center mb-4">{description}</p>

        {/* Price information */}
        <div className="flex justify-center items-center space-x-3 mb-4">
          {/* Old price */}
          {oldPrice && (
            <span className="text-sm text-gray-500 line-through">
              {oldPrice} грн.
            </span>
          )}

          {/* New price */}
          <span className="text-xl font-bold text-red-600">{price} грн.</span>

          {/* Discount percentage */}
          {oldPrice && (
            <span className="text-sm text-green-600">{`- ${discountPercentage}%`}</span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex justify-between px-4 pb-4">
          <button className="bg-slate-950 text-white py-2 px-6 rounded-lg transition-transform duration-200 hover:scale-105">
            Детальніше
          </button>
          <button className="bg-white text-black border py-2 px-6 rounded-lg transition-transform duration-200 hover:scale-105">
            Замовити
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Products component
const Products = () => {
  const sections = [
    {
      id: 'cold-guns',
      title: 'Охолоджені пістолети',
      products: [
        {
          title: 'Пістолет Cold 1',
          image: coldGun1,
          imageHover: coldGun2,
          description: 'Короткий опис пістолета 1',
          price: 5150,
          oldPrice: 6900,
        },
        // Additional products...
      ],
    },
    // Additional sections...
  ];

  return (
    <div>
      {sections.map((section) => (
        <div key={section.id} id={section.id} className="container mx-auto py-8">
          <h2 className="text-3xl font-bold mb-8 text-center">{section.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {section.products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      ))}

      
    </div>
  );
};

export default Products;
