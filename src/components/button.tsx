import colors from '../colors.json';
import { css } from '@emotion/css';
import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  variant?: keyof typeof colors;
} & ComponentPropsWithoutRef<'button'>;

const base = '200';
const hover = '300';
const active = '400';
const border = '700';

const Button = ({ children, variant = 'secondary' }: ButtonProps) => {
  return (
    <button
      className={css`
        padding: 8px 16px;
        background-color: ${colors[variant][base]};
        border-color: ${colors[variant][border]};
        border-width: 2px;
        border-radius: 6px;
        &:hover {
          background-color: ${colors[variant][hover]};
        }
        &:active {
          background-color: ${colors[variant][active]};
        }
      `}
    >
      {children}
    </button>
  );
};

export default Button;
