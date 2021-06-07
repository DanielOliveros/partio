/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import CoffeeIcon from '@/common/components/icons/CoffeeIcon';
import { useTheme } from '@emotion/react';
import Button from '@/common/components/Button';
import LanguageSwitch from '@/common/components/LanguageSwitch';
import useAuthContext from '@/hooks/useAuthContext';
import { useTranslation } from 'react-i18next';
import LoginFormContainer from '@/containers/LoginFormContainer';
import useComponentVisible from '@/hooks/useComponentVisible';
import { useHistory } from 'react-router-dom';
import { LOGOUT } from '@/config/router/paths';

const HeaderButton = ({
  text, onClick = () => {},
}) => {
  const { colors } = useTheme();
  const onClickHandler = () => {
    onClick();
  };
  return (
    <div
      css={{
        color: `${colors.$colorPrimary}`,
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        cursor: 'pointer',
        transition: '0.5s',
        '&:hover': {
          color: colors.$colorSecondary,
        },
      }}
      onClick={onClickHandler}
    >
      {text}
    </div>
  );
};

const Header = () => {
  const { token } = useAuthContext();
  const { colors } = useTheme();
  const { t } = useTranslation();
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const options = [
    {
      id: 0, text: t('header.corporate'), onClick: () => {},
    },
    {
      id: 1, text: t('header.coworkings'), onClick: () => {},
    },
    {
      id: 2, text: t('header.subscriptions'), onClick: () => {},
    },
  ];
  const history = useHistory();
  const signOut = () => history.push(LOGOUT);
  return (
    <>
      <div css={{
        boxShadow: '0 4px 12px 0 rgb(101 103 106 / 10%)',
        width: '100%',
        position: 'fixed',
        top: 0,
        height: '100px',
        display: 'flex',
        backgroundColor: colors.$white,
      }}
      >
        <div css={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 15px',
        }}
        >
          <CoffeeIcon />
          <div css={{
            color: `${colors.$colorPrimary}`,
            fontSize: '30px',
            paddingLeft: '5px',
            background: `linear-gradient(180deg, ${colors.$colorAccent} 0%, ${colors.$colorPrimary} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          >
            Capuccino!
          </div>
        </div>
        {options.map((option) => (
          <HeaderButton
            key={option.id}
            text={option.text}
            onClick={option.onClick}
          />
        ))}
        <div css={{
          margin: '0 15px 0 auto', display: 'flex', alignItems: 'center',
        }}
        >
          <LanguageSwitch />
        </div>
        <div css={{ margin: '0 15px 0 0', display: 'flex', alignItems: 'center' }}>
          <Button onClick={!token ? setIsComponentVisible : signOut} type="gradient">
            {!token ? 'Login' : 'Logout'}
          </Button>
        </div>
      </div>
      {isComponentVisible && (
        <div ref={ref}>
          <LoginFormContainer setVisible={setIsComponentVisible} />
        </div>
      )}
    </>
  );
};

export default Header;
