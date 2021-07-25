import React, { useState } from 'react';
import {
  Input, Wrapper, Button, FormFieldWrapper, Label,
} from '@/components/form';
import { db } from '@/firebase/firebaseIndex';

const initialFormState = {
  coworkingName: '',
  direction: '',
  openingHours: '',
  availableSeats: '',
  description: '',
  instructions: '',
  amenities: {
    freeCoffee: false,
    freeWifi: false,
    kitchen: false,
    games: false,
    terrace: false,
    printer: false,
  },
  phoneNumber: '',
};

const useForm = () => {
  const [inputs, setInputs] = useState({ ...initialFormState });
  const handleSubmit = (event) => {
    if (event) {
      db.collection('coworks').add({
        ...inputs,
      });
      setInputs({ ...initialFormState });
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
    <Wrapper padding="20px 30px">
      <form onSubmit={handleSubmit}>
        <div css={{
          display: 'flex',
          flexFlow: 'column',
        }}
        >
          <FormFieldWrapper>
            <Label>Coworking name:</Label>
            <Input type="text" name="coworkingName" onChange={handleInputChange} value={inputs.coworkingName} required />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Label>Direction</Label>
            <Input type="text" name="direction" onChange={handleInputChange} value={inputs.direction} required />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Label>Opening Hours</Label>
            <Input type="text" name="openingHours" onChange={handleInputChange} value={inputs.openingHours} required />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Label>Available seats:</Label>
            <Input type="number" name="availableSeats" onChange={handleInputChange} value={inputs.availableSeats} />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Label>Description:</Label>
            <Input type="text" name="description" onChange={handleInputChange} value={inputs.description} />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Label>Instructions:</Label>
            <Input type="text" name="instructions" onChange={handleInputChange} value={inputs.instructions} />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Label>Phone number:</Label>
            <Input type="tel" name="phoneNumber" onChange={handleInputChange} value={inputs.phoneNumber} />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <div css={{ display: 'flex', flexDirection: 'column' }}>
              <Label>Amenities:</Label>
              <div css={{ display: 'flex', flexWrap: 'wrap' }}>
                <Label>
                  <input type="checkbox" name="freeCoffee" onChange={handleInputChange} value={inputs.amenities.freeCoffee} />
                  Free coffee
                </Label>
                <Label>
                  <input type="checkbox" name="wifi" onChange={handleInputChange} value={inputs.amenities.freeWifi} />
                  Wifi
                </Label>
                <Label>
                  <input type="checkbox" name="kitchen" onChange={handleInputChange} value={inputs.amenities.kitchen} />
                  Kitchen
                </Label>
                <Label>
                  <input type="checkbox" name="games" onChange={handleInputChange} value={inputs.amenities.games} />
                  Games
                </Label>
                <Label>
                  <input type="checkbox" name="terrace" onChange={handleInputChange} value={inputs.amenities.terrace} />
                  Terrace
                </Label>
                <Label>
                  <input type="checkbox" name="printer" onChange={handleInputChange} value={inputs.amenities.printer} />
                  Printer
                </Label>
              </div>
            </div>
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Button type="submit">Submit</Button>
          </FormFieldWrapper>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddCoworkingFormContainer;
