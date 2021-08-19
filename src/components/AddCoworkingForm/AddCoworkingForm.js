import React from 'react';
import {
  Input, Wrapper, Button, FormFieldWrapper, Label,
} from '@/components/form';
import Typography from '@/components/Typography/Typography';

const AddCoworkingForm = ({
  handleSubmit, handleInputChange, inputsState, content,
}) => (
  <div css={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '40px 0',
  }}
  >
    <Typography type="title">Add coworking:</Typography>
    <Wrapper padding="20px 30px" maxWidth="700px">
      <form onSubmit={handleSubmit}>
        <div css={{
          display: 'flex',
          flexFlow: 'column',
        }}
        >
          <FormFieldWrapper>
            <Label>{content.coworkingName}</Label>
            <Input type="text" name="coworkingName" onChange={handleInputChange} value={inputsState.coworkingName} required />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Label>{content.direction}</Label>
            <Input type="text" name="direction" onChange={handleInputChange} value={inputsState.direction} required />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Label>{content.openingHours}</Label>
            <Input type="text" name="openingHours" onChange={handleInputChange} value={inputsState.openingHours} required />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Label>{content.availableSeats}</Label>
            <Input type="number" name="availableSeats" onChange={handleInputChange} value={inputsState.availableSeats} />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Label>{content.description}</Label>
            <Input type="text" name="description" onChange={handleInputChange} value={inputsState.description} />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Label>{content.instructions}</Label>
            <Input type="text" name="instructions" onChange={handleInputChange} value={inputsState.instructions} />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Label>{content.phoneNumber}</Label>
            <Input type="tel" name="phoneNumber" onChange={handleInputChange} value={inputsState.phoneNumber} />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <div css={{ display: 'flex', flexDirection: 'column' }}>
              <Label>{content.amenities.title}</Label>
              <div css={{ display: 'flex', flexWrap: 'wrap' }}>
                <Label>
                  <input type="checkbox" name="freeCoffee" onChange={handleInputChange} value={inputsState.amenities.freeCoffee} />
                  {content.amenities.freeCoffee}
                </Label>
                <Label>
                  <input type="checkbox" name="wifi" onChange={handleInputChange} value={inputsState.amenities.freeWifi} />
                  {content.amenities.wifi}
                </Label>
                <Label>
                  <input type="checkbox" name="kitchen" onChange={handleInputChange} value={inputsState.amenities.kitchen} />
                  {content.amenities.kitchen}
                </Label>
                <Label>
                  <input type="checkbox" name="games" onChange={handleInputChange} value={inputsState.amenities.games} />
                  {content.amenities.games}
                </Label>
                <Label>
                  <input type="checkbox" name="terrace" onChange={handleInputChange} value={inputsState.amenities.terrace} />
                  {content.amenities.terrace}
                </Label>
                <Label>
                  <input type="checkbox" name="printer" onChange={handleInputChange} value={inputsState.amenities.printer} />
                  {content.amenities.printer}
                </Label>
              </div>
            </div>
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Button type="submit">{content.submit}</Button>
          </FormFieldWrapper>
        </div>
      </form>
    </Wrapper>
  </div>
);

export default AddCoworkingForm;
