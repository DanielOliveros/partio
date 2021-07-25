import React from 'react';
import {
  Input, TextArea, Button, FormFieldWrapper,
} from '@/components/form';

const ContactForm = ({ content, ...props }) => (
  <form css={{
    display: 'flex',
    flexDirection: 'column',
    ...props,
  }}
  >
    <FormFieldWrapper>
      <Input placeholder={content.name} />
    </FormFieldWrapper>
    <FormFieldWrapper>
      <Input placeholder={content.company} />
    </FormFieldWrapper>
    <FormFieldWrapper>
      <Input placeholder={content.email} type="email" />
    </FormFieldWrapper>
    <FormFieldWrapper>
      <TextArea placeholder={content.message} />
    </FormFieldWrapper>
    <FormFieldWrapper>
      <Button>{content.send}</Button>
    </FormFieldWrapper>
  </form>
);

export default ContactForm;
