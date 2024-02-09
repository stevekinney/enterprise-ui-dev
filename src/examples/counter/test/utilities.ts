import { render as RenderComponent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export type RenderResult = ReturnType<typeof RenderComponent>;

const render = (
  component: React.ReactElement,
  options?: Parameters<typeof RenderComponent>[1],
) => ({ ...RenderComponent(component, options), user: userEvent.setup() });

export default render;
