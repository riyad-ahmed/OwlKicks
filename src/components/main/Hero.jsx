import React, { useState, useEffect } from "react";

const Hero = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      setProducts(data);
      console.log(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="hero-container">
      {products.map((products) => (
        <section className="bg-gray-100 py-12">
          <div key={products._id} className="container mx-auto px-4">
            {/* Main Feature */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="flex flex-col">
                  <img
                    src={products.imageUrl}
                    alt="Main article"
                    className="w-full h-[30rem] object-cover rounded-lg"
                  />
                  <div className=" bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
                    {/* <h2 className="text-2xl md:text-4xl font-bold text-white">
                      {products.name}
                    </h2> */}
                    <p className="text-gray-300 mt-2">
                      Explore the latest trends and technologies shaping the
                      future of web development.
                    </p>
                    <a
                      href="/"
                      className="inline-block mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>

    //
  );
};

export default Hero;
