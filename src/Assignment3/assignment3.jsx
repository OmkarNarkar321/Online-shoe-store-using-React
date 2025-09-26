import React, { useState } from "react";

export default function Assignment3() {
  // Shoe data
  const shoes = [
    {
      id: 1,
      name: "Nike Classic Sneaker",
      price: 75,
      image:
        "src/assets/Assignment3/shoes1.png",
    },
    {
      id: 2,
      name: "Nike Running Shoes",
      price: 80,
      image:
        "src/assets/Assignment3/shoes2.png",
    },
    {
      id: 3,
      name: "Adidas Ultraboost",
      price: 150,
      image:
        "src/assets/Assignment3/shoes3.png",
    },
    {
      id: 4,
      name: "Puma RS-X",
      price: 100,
      image:
        "src/assets/Assignment3/shoes4.png",
    },
    {
      id: 5,
      name: "Puma RS-X",
      price: 100,
      image:
        "src/assets/Assignment3/shoes5.png",
    },
    {
      id: 6,
      name: "Puma RS-X",
      price: 100,
      image:
        "src/assets/Assignment3/shoes6.png",
    },
    {
      id: 7,
      name: "Puma RS-X",
      price: 100,
      image:
        "src/assets/Assignment3/shoes7.png",
    },
    {
      id: 8,
      name: "Puma RS-X",
      price: 100,
      image:
        "src/assets/Assignment3/shoes8.png",
    },
  ];

  const [cart, setCart] = useState([]);

  // Add to Cart
  const addToCart = (shoe) => {
    const existing = cart.find((item) => item.id === shoe.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  };

  // Remove from Cart (decrease quantity)
  const removeFromCart = (shoeId) => {
    const existing = cart.find((item) => item.id === shoeId);
    if (existing.quantity === 1) {
      setCart(cart.filter((item) => item.id !== shoeId));
    } else {
      setCart(
        cart.map((item) =>
          item.id === shoeId ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  // Cart Total
  const getTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-6 text-white">
      <h1 className="text-center text-3xl font-bold mb-8 text-yellow-400">
        👟 Assignment-3: Online Shoe Store
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Shoe List */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Available Shoes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {shoes.map((shoe) => (
              <div
                key={shoe.id}
                className="bg-gray-700 rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-xl transition"
              >
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  className="h-32 object-contain mb-3"
                />
                <h3 className="text-lg font-semibold">{shoe.name}</h3>
                <p className="text-yellow-400 font-bold">${shoe.price}</p>
                <button
                  onClick={() => addToCart(shoe)}
                  className="mt-3 px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-600 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Shopping Cart */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Cart</h2>
          <div className="bg-gray-700 rounded-xl shadow-md p-4">
            {cart.length === 0 ? (
              <p className="text-gray-300">Your cart is empty.</p>
            ) : (
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between border-b border-gray-600 pb-2"
                  >
                    {/* Product Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-14 w-14 object-contain rounded-md"
                    />

                    {/* Product Info */}
                    <div className="flex-1 ml-4">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-400">
                        Price: ${item.price} × {item.quantity}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="px-2 py-1 bg-yellow-500 text-black rounded-lg font-bold hover:bg-yellow-600"
                      >
                        -
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-2 py-1 bg-yellow-500 text-black rounded-lg font-bold hover:bg-yellow-600"
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* Cart Total */}
            <div className="mt-4 text-right font-bold text-lg text-yellow-400">
              Total: ${getTotal()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
