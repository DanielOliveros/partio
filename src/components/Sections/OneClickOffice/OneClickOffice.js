import React from 'react';
import Typography from '@/components/Typography';
import GooglePlay from '@/components/icons/GooglePlay';
import AppStore from '@/components/icons/AppStore';
import { useMediaQuery } from 'react-responsive';

const OneClickOffice = ({ content }) => (
  <>
    <div css={{
      display: 'flex', flexDirection: 'column', alignSelf: 'center', justifyContent: 'center', minHeight: '544px',
    }}
    >
      <Typography type="title">{content.title}</Typography>
      <div css={{
        maxWidth: '600px', padding: '40px 0',
      }}
      >
        <Typography type="text">
          {content.text1.concat(content.text2).concat(content.text3)}
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
    <div css={{
      display: 'flex', justifyContent: 'center', paddingLeft: '20px', flexGrow: '1',
    }}
    >
      <img src="https://firebasestorage.googleapis.com/v0/b/cowork-97ad9.appspot.com/o/src%2Fassets%2Fimg%2Fsmartphone.png?alt=media&token=620af32b-5b32-468e-bb9c-2c3b1d9ddce1" alt="app" />
    </div>
  </>
);

const Word = ({ children }) => (
  <div css={{
    padding: '10px 30px 20px 0',
  }}
  >
    <Typography type="title">{children}</Typography>
  </div>
);

const OneClickOfficeMobile = ({ content }) => {
  const words = content.title.split(' ');
  return (
    <div css={{ paddingBottom: '50px', display: 'flex' }}>
      <div css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexGrow: '1',
        boxSizing: 'border-box',
        paddingLeft: '16px',
      }}
      >
        <div css={{ display: 'flex', flexWrap: 'wrap', maxWidth: '200px' }}>
          {words.map((word, i) => <Word key={i}>{word}</Word>)}
        </div>
        <div css={{ padding: '0 20px 10px 0' }}>
          <Typography type="text" fontSize="14px">
            {content.text1}
          </Typography>
        </div>
        <div css={{ padding: '0 20px 0 0' }}>
          <Typography type="text" fontSize="14px">
            {content.text2}
          </Typography>
        </div>
      </div>
      <div css={{
        minWidth: '154px', overflow: 'hidden', display: 'flex',
      }}
      >
        <img css={{ alignSelf: 'center', height: '406px' }} src="https://firebasestorage.googleapis.com/v0/b/cowork-97ad9.appspot.com/o/src%2Fassets%2Fimg%2Fsmartphone.png?alt=media&token=620af32b-5b32-468e-bb9c-2c3b1d9ddce1" alt="app" />
      </div>
    </div>
  );
};

const Component = ({ content }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });
  return isDesktopOrLaptop
    ? <OneClickOffice content={content} /> : <OneClickOfficeMobile content={content} />;
};

export default Component;
