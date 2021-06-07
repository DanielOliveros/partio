/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@emotion/react';

const LanguageSwitch = () => {
  const { colors } = useTheme();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const onSetLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const getLanguageOptionStyles = (language) => ({
    cursor: 'pointer',
    opacity: `${currentLanguage !== language ? 0.5 : colors.$colorPrimary}`,
  });
  return (
    <div css={{ color: `${colors.$colorPrimary}`, display: 'flex' }}>
      <div css={getLanguageOptionStyles('en')} onClick={() => onSetLanguage('en')}>
        EN
      </div>
      <div>|</div>
      <div css={getLanguageOptionStyles('es')} onClick={() => onSetLanguage('es')}>
        ES
      </div>
    </div>
  );
};

export default LanguageSwitch;
