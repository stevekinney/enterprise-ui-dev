import { ComponentPropsWithoutRef } from 'react';
import { pluralize } from '$lib/pluralize';

type NumberRange = ComponentPropsWithoutRef<'input'> & {
  type?: 'range' | 'number';
  value: number | string;
};

const NumberRange = ({
  id = 'select-number',
  value,
  min = 1,
  max = 100,
  type = 'range',
  ...props
}: NumberRange) => {
  return (
    <form onSubmit={(event) => event.preventDefault} className="w-full">
      <label htmlFor={`${id}-range`}>
        Showing {value} {pluralize('item', value)}.
      </label>
      <div className="flex items-center gap-4">
        <p>{min}</p>
        <input
          id={`${id}-range`}
          type={type}
          value={value}
          min={min}
          max={max}
          {...props}
        ></input>
        <p>{max}</p>
      </div>
    </form>
  );
};

export default NumberRange;
