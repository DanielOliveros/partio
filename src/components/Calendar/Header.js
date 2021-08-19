/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';

const StyledHeader = styled('div')(css({
  height: '30px',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 15px',
  alignItems: 'center',
  backgroundColor: 'darkBlue',
  color: 'white',
}));

const StyledMonthSwitcher = styled('div')(css({ cursor: 'pointer' }));

function prevMonth(value) {
  return value.clone().subtract(1, 'month');
}

function nextMonth(value) {
  return value.clone().add(1, 'month');
}

const Header = ({
  setValue, value, currentMonth, currentYear,
}) => (
  <StyledHeader>
    <StyledMonthSwitcher onClick={() => setValue(prevMonth(value))}>
      {String.fromCharCode(171)}
    </StyledMonthSwitcher>
    <div>
      {currentMonth}
      {' '}
      {currentYear}
    </div>
    <StyledMonthSwitcher onClick={() => setValue(nextMonth(value))}>
      {String.fromCharCode(187)}
    </StyledMonthSwitcher>
  </StyledHeader>
);

export default Header;
