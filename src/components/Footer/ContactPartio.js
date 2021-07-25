import React from 'react';
import Text from './Text';

const ContactPartio = ({ content }) => (
  <>
    <Text fontSize="44px" lineHeight="55px">
      {content.title}
    </Text>
    <div css={{ padding: '22px 0' }}>
      <Text>
        {content.text}
      </Text>
    </div>
    <Text>
      weare@partio.com
    </Text>
    <Text>
      669222668
    </Text>
  </>
);

export default ContactPartio;
