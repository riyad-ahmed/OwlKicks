import React, { useState, useEffect } from 'react';


const Hero = () => {

    const [humans, setHumans] = useState([]);

    useEffect(() => {
      const fetchHumans = async () => {
        const response = await fetch('/api/humans');
        const data = await response.json();
        setHumans(data);
      };
  
      fetchHumans();
    }, []);

  return (
    <div className="hero-container">
        <h1>riyad</h1>
      {humans.map((human) => (
        <div key={human._id} className="human-card">
          <img src={human.imageUrl} alt={human.name} className="human-image" />
          <h2 className="human-name">{human.name}</h2>
          <p className="human-description">{human.description}</p>
          <p className="human-profession">{human.profession}</p>
          <p className="human-country">{human.country}</p>
        </div>
      ))}
    </div>
  );
};

export default Hero;
