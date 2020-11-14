import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [userInput, setUserInput] = useState({
    name: '',
    age: '',
    country: '',
    position: '',
    wage: '',
  });

  const { name, age, country, position, wage } = userInput;

  const changeHandler = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/post', {
        name,
        age,
        country,
        position,
        wage,
      });
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={submitForm} className="row g-3">
      <div className="col-md-6">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={changeHandler}
          name="name"
          value={name}
          type="text"
          className="form-control"
          id="name"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={changeHandler}
          name="age"
          value={age}
          type="number"
          className="form-control"
          id="age"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="country" className="form-label">
          Country
        </label>
        <input
          onChange={changeHandler}
          name="country"
          value={country}
          type="text"
          className="form-control"
          id="country"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="position" className="form-label">
          Position
        </label>
        <input
          onChange={changeHandler}
          name="position"
          value={position}
          type="text"
          className="form-control"
          id="position"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="wage" className="form-label">
          Wage
        </label>
        <input
          onChange={changeHandler}
          name="wage"
          value={wage}
          type="number"
          className="form-control"
          id="wage"
        />
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
};

export default App;
