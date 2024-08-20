import React, { useState, useEffect } from 'react';


const Hero = () => {

    const [humans, setHumans] = useState([]);

    useEffect(() => {
      const fetchHumans = async () => {
        const response = await fetch('http://localhost:5000/humans');
        const data = await response.json();
        setHumans(data);
      };
  
      fetchHumans();
    }, []);

  return (
    // <div className="hero-container">
    //   {humans.map((human) => (
    //     <div key={human._id} className="human-card">
    //       <img src={human.imageUrl} alt={human.name} className="human-image" />
    //       <h2 className="human-name">{human.name}</h2>
    //       <p className="human-profession">{human.occupation}</p>
    //       <p className="human-country">{human.country}</p>
    //       <p className="human-description">{human.bio}</p>
    //     </div>
    //   ))}
    // </div>
    <div className="hero-container">
            {humans.map((human) => ( 
            <section className="bg-gray-100 py-12">
                <div key={human._id}  className="container mx-auto px-4">
                    {/* Main Feature */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <div className='flex flex-col'>
                            <img
                                src={human.imageUrl}
                                alt="Main article"
                                className="w-full h-[30rem] object-cover rounded-lg"
                            />
                            <div className=" bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
                                <h2 className="text-2xl md:text-4xl font-bold text-white">
                                    {human.name}
                                </h2>
                                <p className="text-gray-300 mt-2">
                                Explore the latest trends and technologies shaping the future of web development.
                                </p>
                                <a
                                href="#"
                                className="inline-block mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                                >
                                Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Secondary Features */}
                    <div className="flex flex-col space-y-8">
                        <div className="flex items-center space-x-4">
                        <img
                            src={human.imageUrl}
                            alt="Article 1"
                            className="w-32 h-20 object-cover rounded-lg"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">
                            Understanding JavaScript Closures
                            </h3>
                            <a
                            href="#"
                            className="text-red-600 hover:underline"
                            >
                            Read More
                            </a>
                        </div>
                        </div>
                        <div className="flex items-center space-x-4">
                        <img
                            src={human.imageUrl}
                            alt="Article 2"
                            className="w-32 h-20 object-cover rounded-lg"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">
                            CSS Grid vs. Flexbox: When to Use Which
                            </h3>
                            <a
                            href="#"
                            className="text-red-600 hover:underline"
                            >
                            Read More
                            </a>
                        </div>
                        </div>
                        <div className="flex items-center space-x-4">
                        <img
                            src={human.imageUrl}
                            alt="Article 3"
                            className="w-32 h-20 object-cover rounded-lg"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">
                            Designing for Accessibility: Best Practices
                            </h3>
                            <a
                            href="#"
                            className="text-red-600 hover:underline"
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

  );
};

export default Hero;
