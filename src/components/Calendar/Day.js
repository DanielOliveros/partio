import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import dayStyles from './styles';

const DayWrapper = styled('div')(css({
  height: '90px',
  display: 'flex',
  flexDirectiion: 'column',
  justifyContent: 'center',
  alignItems: 'flexStart',
  border: 'solid 1px',
  borderColor: 'darkBlue',
  width: `${100 / 7}%`,
}));

const Day = ({ value, day, bookings }) => {
  console.log(bookings);
  return (
    <DayWrapper key={day.get('date')} css={dayStyles(day, value)}>
      {day.format('D').toString()}
      {/* {bookings.forEach((booking) => (
        <div>{booking.id}</div>
      ))} */}
    </DayWrapper>
  );
};
export default Day;
