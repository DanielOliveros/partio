import React from 'react';
import Typography from '@/common/components/Typography';

const Coworking = ({ city, direction }) => (
  <div css={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
    <img
      css={{
        width: '100%',
        padding: '40px 0 20px',
      }}
      src="src/assets/img/Coworking1.png"
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

const Coworkings = () => (
  <div css={{ display: 'flex', flexDirection: 'column' }}>
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

export default Coworkings;
