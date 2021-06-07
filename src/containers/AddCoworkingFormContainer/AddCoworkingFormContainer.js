import React, { useState } from 'react';
import Input from '@/common/components/Input';

const useForm = () => {
  const [inputs, setInputs] = useState({
    company: '',
    instructions: '',
    name: '',
    schedule: '',
    slug: '',
  });
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
  };
  const handleInputChange = (event) => {
    setInputs(() => ({ ...inputs, [event.target.name]: event.target.value }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

const AddCoworkingFormContainer = () => {
  const { handleSubmit, handleInputChange, inputs } = useForm();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div css={{
          display: 'flex',
          flexFlow: 'column',
        }}
        >
          <div>
            <label>First Name</label>
            <Input type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
          </div>
          <div>
            <label>Last Name</label>
            <Input type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
          </div>
          <div>
            <label>Email Address</label>
            <Input type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
          </div>
          <div>
            <label>Password</label>
            <Input type="password" name="password1" onChange={handleInputChange} value={inputs.password1} />
          </div>
          <div>
            <label>Re-enter Password</label>
            <Input type="password" name="password2" onChange={handleInputChange} value={inputs.password2} />
          </div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </>
  );
};

export default AddCoworkingFormContainer;
