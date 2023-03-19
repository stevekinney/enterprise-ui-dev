import { repeat } from '$lib/repeat';
import { toFizzBuzz } from '$lib/to-fizz-buzz';
import { NumberItem } from './number';

const Numbers = ({ times }: { times: number }) => {
  return (
    <section className="grid grid-cols-10 gap-4">
      {repeat(times, (i: number) => (
        <NumberItem key={i}>{toFizzBuzz(i)}</NumberItem>
      ))}
    </section>
  );
};

export default Numbers;
