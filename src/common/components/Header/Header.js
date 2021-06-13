/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import HeaderIcon from '@/common/components/icons/HeaderIcon';
import { useTheme } from '@emotion/react';
// import Button from '@/common/components/Button';
import LanguageSwitch from '@/common/components/LanguageSwitch';
// import useAuthContext from '@/hooks/useAuthContext';
// import { useTranslation } from 'react-i18next';
// import LoginFormContainer from '@/containers/LoginFormContainer';
// import useComponentVisible from '@/hooks/useComponentVisible';
// import { useHistory } from 'react-router-dom';
// import { LOGOUT } from '@/config/router/paths';

import styled from '@emotion/styled';
import css from '@styled-system/css';

// const HeaderButton = ({
//   text, onClick = () => {},
// }) => {
//   const { colors } = useTheme();
//   const onClickHandler = () => {
//     onClick();
//   };
//   return (
//     <div
//       css={{
//         color: `${colors.$colorPrimary}`,
//         display: 'flex',
//         alignItems: 'center',
//         padding: '0 10px',
//         cursor: 'pointer',
//         transition: '0.5s',
//         '&:hover': {
//           color: colors.$colorSecondary,
//         },
//       }}
//       onClick={onClickHandler}
//     >
//       {text}
//     </div>
//   );
// };

// const Header = () => {
//   const { token } = useAuthContext();
//   const { colors } = useTheme();
//   const { t } = useTranslation();
//   const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
//   const options = [
//     {
//       id: 0, text: t('header.corporate'), onClick: () => {},
//     },
//     {
//       id: 1, text: t('header.coworkings'), onClick: () => {},
//     },
//     {
//       id: 2, text: t('header.subscriptions'), onClick: () => {},
//     },
//   ];
//   const history = useHistory();
//   const signOut = () => history.push(LOGOUT);
//   return (
//     <>
//       <div css={{
//         width: '100%',
//         position: 'fixed',
//         top: 0,
//         height: '100px',
//         display: 'flex',
//         backgroundColor: colors.$white,
//       }}
//       >
//         <div css={{
//           display: 'flex',
//           alignItems: 'center',
//           padding: '0 15px',
//         }}
//         >
//           <HeaderIcon />
//         </div>
//         {options.map((option) => (
//           <HeaderButton
//             key={option.id}
//             text={option.text}
//             onClick={option.onClick}
//           />
//         ))}
//         <div css={{
//           margin: '0 15px 0 auto', display: 'flex', alignItems: 'center',
//         }}
//         >
//           <LanguageSwitch />
//         </div>
//         <div css={{ margin: '0 15px 0 0', display: 'flex', alignItems: 'center' }}>
//           <Button onClick={!token ? setIsComponentVisible : signOut} type="gradient">
//             {!token ? 'Login' : 'Logout'}
//           </Button>
//         </div>
//       </div>
//       {isComponentVisible && (
//         <div ref={ref}>
//           <LoginFormContainer setVisible={setIsComponentVisible} />
//         </div>
//       )}
//     </>
//   );
// };

const topOptions = [
  {
    id: 0,
    option: 'Partios',
    handler: () => console.log('option1'),
  },
  {
    id: 1,
    option: 'Login',
    handler: () => console.log('option2'),
  },
];

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
  return (
    <div css={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <StyledHeader>
        <div css={{
          display: 'flex',
          justifyContent: 'flex-end',
          color: partioColors.$darkGrey,
        }}
        >
          {topOptions.map((option) => <TopOption key={option.id} {...option} />)}
          <LanguageSwitch />
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

export default NewHeader;
