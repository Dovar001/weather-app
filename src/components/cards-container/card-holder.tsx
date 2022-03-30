import { FC } from 'react';
import { dayFive, dayFour, dayThree, today, tomorrow } from '../../helpers';
import { DayInfo } from '../day-info/day-info';


const Cards: FC = () => {
  return (
    <>
      <DayInfo day={today} />
      <DayInfo day={tomorrow} />
      <DayInfo day={dayThree} />
      <DayInfo day={dayFour} />
      <DayInfo day={dayFive} />
    </>
  );
};

export { Cards };
