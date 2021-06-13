import React from 'react';
import Typography from '@/common/components/Typography';
import GooglePlay from '@/common/components/icons/GooglePlay';
import AppStore from '@/common/components/icons/AppStore';

const OneClickOffice = ({ content }) => (
  <>
    <div css={{
      display: 'flex', flexDirection: 'column', alignSelf: 'center', justifyContent: 'flex-start',
    }}
    >
      <Typography type="title">{content.title}</Typography>
      <div css={{
        maxWidth: '600px', padding: '40px 0',
      }}
      >
        <Typography type="text">
          {content.text}
        </Typography>
      </div>
      <div css={{ display: 'flex', maxWidth: '450px', justifyContent: 'space-between' }}>
        <div css={{ cursor: 'pointer' }}>
          <GooglePlay />
        </div>
        <div css={{ cursor: 'pointer' }}>
          <AppStore />
        </div>
      </div>
    </div>
    <div css={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
      <img src="src/assets/img/Group.png" alt="app" />
    </div>
  </>
);

export default OneClickOffice;
