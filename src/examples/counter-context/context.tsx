import { type PropsWithChildren, useState, createContext } from 'react';

type CounterProps = {
  initialCount?: number;
};

export const CounterContext = createContext({
  count: 0,
  increment: () => {},
  reset: () => {},
});

export const CounterProvider = ({
  children,
  initialCount = 0,
}: PropsWithChildren<CounterProps>) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount((n) => n + 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, reset }}>
      {children}
    </CounterContext.Provider>
  );
};
