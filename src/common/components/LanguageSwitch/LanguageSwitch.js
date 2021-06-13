/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@emotion/react';

const LanguageSwitch = () => {
  const { partioColors } = useTheme();
  const { i18n } = useTranslation();
  const onSetLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div css={{
      color: `${partioColors.$darkGrey}`, display: 'flex', alignItems: 'center', padding: '5px 15px',
    }}
    >
      <span css={{ cursor: 'pointer' }} onClick={() => onSetLanguage('en')}>
        EN
      </span>
      <span>|</span>
      <span css={{ cursor: 'pointer' }} onClick={() => onSetLanguage('es')}>
        ES
      </span>
    </div>
  );
};

export default LanguageSwitch;
