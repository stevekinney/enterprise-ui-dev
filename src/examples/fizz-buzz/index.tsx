import { type PropsWithChildren, useState } from 'react';
import Numbers from './numbers';
import NumberRange from './number-range';
import Frame from '$components/frame';

const FizzBuzz = ({ children }: PropsWithChildren) => {
  const [amount, setAmount] = useState(10);

  return (
    <Frame>
      {children}
      <NumberRange
        value={amount}
        onChange={(event) => setAmount(+event.target.value)}
        className="w-full"
      />
      <Numbers times={amount} />
    </Frame>
  );
};

export default FizzBuzz;
