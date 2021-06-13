import React from 'react';
import Typography from '@/common/components/Typography';

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
        src="src/assets/img/Coworking1.png"
        alt="app"
      />
    </div>
  </>
);

export default OurPromise;
