/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import HeaderIcon from '@/components/icons/HeaderIcon';
import HamburguerMenu from '@/components/icons/HamburguerMenu/HamburguerMenu';
import { useTheme } from '@emotion/react';
import { useMediaQuery } from 'react-responsive';
import LanguageSwitch from '@/components/LanguageSwitch';
import useAuthContext from '@/hooks/useAuthContext';
import LoginFormContainer from '@/containers/LoginFormContainer';
import useComponentVisible from '@/hooks/useComponentVisible';
import { useHistory } from 'react-router-dom';
import { LOGOUT } from '@/config/router/paths';

import styled from '@emotion/styled';
import css from '@styled-system/css';

const mainOptions = [
  {
    id: 0,
    option: 'Menu1',
    handler: () => console.log('option1'),
  },
  {
    id: 1,
    option: 'Menu2',
    handler: () => console.log('option2'),
  },
  {
    id: 2,
    option: 'Menu3',
    handler: () => console.log('option2'),
  },
];

const StyledHeader = styled('div')(css({
  width: '100%',
  maxWidth: '1300px',
  display: 'flex',
  flexDirection: 'column',
}));

const TopOption = ({ option, handler }) => (
  <div css={{ padding: '5px 15px', cursor: 'pointer' }} onClick={handler}>
    {option}
  </div>
);

const MainOption = ({ option, handler }) => (
  <div css={{ padding: '20px 23px 0', cursor: 'pointer' }} onClick={handler}>
    {option}
  </div>
);

const NewHeader = () => {
  const { partioColors } = useTheme();
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const history = useHistory();
  const signOut = () => history.push(LOGOUT);
  const { token } = useAuthContext();
  return (
    <div css={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <StyledHeader>
        <div css={{
          display: 'flex',
          justifyContent: 'flex-end',
          color: partioColors.$darkGrey,
        }}
        >
          <TopOption option="Partios" handler={() => {}} />
          <TopOption option={!token ? 'Login' : 'Logout'} handler={!token ? setIsComponentVisible : signOut} />
          <LanguageSwitch />
          {isComponentVisible && (
          <div ref={ref} css={{ position: 'relative' }}>
            <LoginFormContainer setVisible={setIsComponentVisible} />
          </div>
          )}
        </div>
        <div css={{ display: 'flex', alignItems: 'center' }}>
          <div css={{ paddingRight: '23px' }}>
            <HeaderIcon />
          </div>
          {mainOptions.map((option) => <MainOption key={option.id} {...option} />)}
        </div>
      </StyledHeader>
    </div>
  );
};

const HeaderMobile = () => (
  <div css={{ display: 'flex', padding: '16px', justifyContent: 'space-between' }}>
    <HeaderIcon />
    <div css={{ alignSelf: 'center', cursor: 'pointer' }}>
      <HamburguerMenu />
    </div>
  </div>
);

const Component = ({ content }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });
  return isDesktopOrLaptop
    ? <NewHeader content={content} /> : <HeaderMobile content={content} />;
};

export default Component;
