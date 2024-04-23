import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_STARSHIP = gql`
  mutation AddStarship($name: String!, $crew: Int!, $cargoCapacity: Float!) {
    addStarship(input: { name: $name, crew: $crew, cargoCapacity: $cargoCapacity }) {
      starship {
        id
        name
        crew
        cargoCapacity
      }
    }
  }
`;

const AddStarshipForm = () => {
  const [name, setName] = useState('');
  const [crew, setCrew] = useState(0);
  const [cargoCapacity, setCargoCapacity] = useState(0);
  const [addStarship] = useMutation(ADD_STARSHIP);

  const handleSubmit = (e) => {
    e.preventDefault();
    addStarship({ variables: { name, crew: parseInt(crew), cargoCapacity: parseFloat(cargoCapacity) } });
    setName('');
    setCrew(0);
    setCargoCapacity(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Crew:
        <input
          type="number"
          value={crew}
          onChange={(e) => setCrew(parseInt(e.target.value))}
        />
      </label>
      <label>
        Cargo Capacity:
        <input
          type="number"
          value={cargoCapacity}
          onChange={(e) => setCargoCapacity(parseFloat(e.target.value))}
        />
      </label>
      <button type="submit">Add Starship</button>
    </form>
  );
};

export default AddStarshipForm;
