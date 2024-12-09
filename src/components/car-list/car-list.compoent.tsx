import React, { useState } from 'react';
import CarList from './cars.json';

const CardList = () => {
  const [car, setCard] = useState(CarList);

  const handleInput = (e: { target: { value: string } }) => {
    setCard(
      CarList.filter((car) =>
        car.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  console.log(car);

  return (
    <div>
      <h1>Car list</h1>
      <section>
        <input
          type="text"
          placeholder="search..."
          onChange={(e) => handleInput(e)}
        />
      </section>
      <section>
        {car.map((car) => (
          <div key={car.id}>
            <h2>{car.name}</h2>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CardList;
