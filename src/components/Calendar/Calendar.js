import React, { useState, useEffect } from 'react';
// import { db } from '@/firebase/firebaseIndex';
import moment from 'moment';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import buildCalendar from './build';
import Header from './Header';
import Day from './Day';

const WeekWrapper = styled('div')(css({ display: 'flex' }));

const CalendarWrapper = ({
  calendar,
  value,
  currentMonth,
  currentYear,
  setValue,
}) => (
  <div css={{ display: 'flex', flexDirection: 'column' }}>
    <Header
      setValue={setValue}
      value={value}
      currentMonth={currentMonth}
      currentYear={currentYear}
    />
    {calendar.map((week) => (
      <WeekWrapper key={week[0].get('date')}>
        {week.map((day) => (
          <Day value={value} day={day} />
        ))}
      </WeekWrapper>
    ))}
  </div>
);

const CalendarManager = () => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  // const [bookings, setBookings] = useState([]);
  // useEffect(() => {
  //   const partial = [];
  //   db.collection('bookings').where('date', '!=', null)
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         partial.push(doc.data());
  //       });
  //       setBookings(partial);
  //     });
  // });

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  function currentMonthName() {
    return value.format('MMMM');
  }

  function currentYear() {
    return value.format('YYYY');
  }

  return /* bookings.length && */ (
    <CalendarWrapper
      calendar={calendar}
      currentMonth={currentMonthName()}
      currentYear={currentYear()}
      setValue={setValue}
      value={value}
    />
  );
};

export default CalendarManager;
