import React from 'react';
import Typography from '@/components/Typography';
import { useMediaQuery } from 'react-responsive';

const Coworking = ({ city, direction }) => (
  <div css={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
    <img
      css={{
        width: '100%',
        padding: '40px 0 20px',
      }}
      src="https://firebasestorage.googleapis.com/v0/b/cowork-97ad9.appspot.com/o/src%2Fassets%2Fimg%2FCoworking1.png?alt=media&token=8aadd6f3-bad0-4b56-a520-01139b1912aa"
      alt="app"
    />
    <Typography type="subtitle">{city}</Typography>
    <Typography type="text">{direction}</Typography>
  </div>
);

const coworkings = [
  {
    id: 1,
    city: 'Barcelona',
    direction: 'Carrer Bailen 42, 6-3',
  },
  {
    id: 2,
    city: 'Barcelona',
    direction: 'Carrer Muntaner 210',
  },
  {
    id: 3,
    city: 'Madrid',
    direction: 'Gran vía 40',
  },
];

const Coworkings = ({ ...props }) => (
  <div css={{ display: 'flex', flexDirection: 'column', ...props }}>
    <Typography type="title">Coworkings</Typography>
    <div css={{ display: 'flex', justifyContent: 'space-between' }}>
      {coworkings.map((coworking) => (
        <Coworking
          key={coworking.id}
          city={coworking.city}
          direction={coworking.direction}
        />
      ))}
    </div>
  </div>
);

const Component = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });
  const padding = isDesktopOrLaptop ? '164px 0' : '0 16px 50px';
  return <Coworkings padding={padding} />;
};

export default Component;
