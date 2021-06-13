import React from 'react';
import Typography from '@/common/components/Typography';

const AboutUs = ({ content }) => (
  <>
    <div css={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
      <Typography type="title">{content.title}</Typography>
    </div>
    <div>
      <Typography type="text">{content.text}</Typography>
    </div>
  </>
);

export default AboutUs;
