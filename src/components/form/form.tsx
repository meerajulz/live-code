import React, { useState } from 'react';

const FormApp = () => {
  //Define the fields for the form inputs
  const fields = ['firstName', 'lastName', 'email', 'password'];

  //state to hold the for the form data
  const [formData, setFormData] = useState({});

  //Handle the form submit
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Form</h1>
      {/* Form inputs */}
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field}>
            <label htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)}:
            </label>
            <input
              type="text"
              id={field}
              name={field}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormApp;
