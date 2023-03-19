import { useContext } from 'react';
import Frame from '$components/frame';
import { CounterContext, CounterProvider } from './context';

const Counter = () => {
  const { count, increment, reset } = useContext(CounterContext);

  return (
    <Frame className="text-center">
      <header>
        <h1>Days Since Our Last Gitastrophe™</h1>
      </header>
      <div className="text-center text-8xl" data-testid="current-count">
        {count}
      </div>
      <div className="flex justify-center gap-4">
        <button className="btn-danger" name="reset" onClick={reset}>
          Reset
        </button>
        <button className="btn-primary" name="increment" onClick={increment}>
          Increment
        </button>
      </div>
    </Frame>
  );
};

export default () => (
  <CounterProvider>
    <Counter />
  </CounterProvider>
);
