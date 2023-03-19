import { useState } from 'react';
import Frame from '$components/frame';

type CounterProps = {
  initialCount?: number;
};

const Counter = ({ initialCount = 0 }: CounterProps) => {
  const [count, setCount] = useState(initialCount);

  return (
    <Frame className="text-center">
      <header>
        <h1>Days Since Our Last Gitastrophe™</h1>
      </header>
      <div className="text-center text-8xl" data-testid="current-count">
        {count}
      </div>
      <div className="flex justify-center gap-4">
        <button className="btn-danger" name="reset" onClick={() => setCount(0)}>
          Reset
        </button>
        <button
          className="btn-primary"
          name="increment"
          onClick={() => setCount((n) => n + 1)}
        >
          Increment
        </button>
      </div>
    </Frame>
  );
};

export default Counter;
