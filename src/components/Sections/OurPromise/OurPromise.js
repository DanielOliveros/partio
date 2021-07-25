import React from 'react';
import Typography from '@/components/Typography';
import { useMediaQuery } from 'react-responsive';

const Subsection = ({ title = '', subtitle = '', text = '' }) => (
  <div css={{
    padding: '40px 0',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flexStart',
    maxWidth: '357px',
  }}
  >
    <div>
      <Typography type="title">{title}</Typography>
    </div>
    <div>
      <Typography type="subtitle">{subtitle}</Typography>
    </div>
    <div css={{ margin: '8px 0' }}>
      <Typography type="text">
        {text}
      </Typography>
    </div>
  </div>
);

const OurPromise = ({ content }) => (
  <>
    <div css={{
      display: 'flex',
      flexDirection: 'column',
      flexShrink: '0',
      justifyContent: 'center',
      width: '50%',
    }}
    >
      <div css={{ width: '100%', paddingTop: '20px' }}>
        <Typography type="title">{content.title}</Typography>
      </div>
      <Subsection
        title="1."
        subtitle={content.subtitle1}
        text={content.text1}
      />
      <Subsection
        title="2."
        subtitle={content.subtitle2}
        text={content.text2}
      />
      <Subsection
        title="3."
        subtitle={content.subtitle3}
        text={content.text3}
      />
    </div>
    <div css={{
      width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center',
    }}
    >
      <img
        css={{
          width: '100%',
        }}
        src="https://firebasestorage.googleapis.com/v0/b/cowork-97ad9.appspot.com/o/src%2Fassets%2Fimg%2FCoworking1.png?alt=media&token=8aadd6f3-bad0-4b56-a520-01139b1912aa"
        alt="app"
      />
    </div>
  </>
);

const OurPromiseMobile = ({ content }) => (
  <div css={{
    display: 'flex', flexDirection: 'column', width: '100%',
  }}
  >
    <div css={{
      width: '100%',
      padding: '20px 0',
      minWidth: '350px',
      paddingLeft: '16px',
      boxSizing: 'border-box',
    }}
    >
      <Typography type="title">{content.title}</Typography>
    </div>
    <img
      css={{
        width: 'calc(100% - 16px)',
        height: 'auto',
        alignSelf: 'flex-end',
      }}
      src="https://firebasestorage.googleapis.com/v0/b/cowork-97ad9.appspot.com/o/src%2Fassets%2Fimg%2FCoworking1.png?alt=media&token=8aadd6f3-bad0-4b56-a520-01139b1912aa"
      alt="app"
    />
    <div css={{
      display: 'flex',
      flexDirection: 'column',
      flexShrink: '0',
      justifyContent: 'center',
      width: 'calc(100% - 16px)',
      marginTop: '-32px',
      backgroundColor: '#FFF',
    }}
    >
      <div css={{ padding: '16px' }}>
        <Subsection
          title="1."
          subtitle={content.subtitle1}
          text={content.text1}
        />
        <Subsection
          title="2."
          subtitle={content.subtitle2}
          text={content.text2}
        />
        <Subsection
          title="3."
          subtitle={content.subtitle3}
          text={content.text3}
        />
      </div>
    </div>
  </div>
);

const Component = ({ content }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });
  return isDesktopOrLaptop
    ? <OurPromise content={content} /> : <OurPromiseMobile content={content} />;
};

export default Component;
