import { render } from '@testing-library/react';
import ObstacleCourse, { avengers, beatles, toppings } from '.';

it('should input text into the input field', () => {
  const thought = 'Ravioli are a form of pop tart.';
  expect.assertions(1);
  const { getByTestId } = render(<ObstacleCourse />);
  const input = getByTestId('text-input');
  input.focus();
  input.setAttribute('value', thought);

  expect(input.getAttribute('value')).toBe(thought);
});

it('should control a select input', () => {
  expect.assertions(1);
  const { getByTestId } = render(<ObstacleCourse />);
  const select = getByTestId('select-input');
  select.focus();
  select.setAttribute('value', avengers[0]);

  expect(select.getAttribute('value')).toBe(avengers[0]);
});

it('should find and control a checkbox input', () => {
  expect.assertions(1);
  const { getByTestId } = render(<ObstacleCourse />);
  const checkbox = getByTestId('checkbox-' + toppings[0].toLocaleLowerCase());

  checkbox.focus();

  checkbox.setAttribute('checked', 'checked')

  expect(checkbox.getAttribute('checked')).toBe('checked');
});

it('should find and control a radio input', () => {
  expect.assertions(1);
  const { getByTestId } = render(<ObstacleCourse />);
  const radio = getByTestId('radio-' + beatles[0].toLocaleLowerCase());

  radio.focus();

  radio.setAttribute('checked', 'checked')

  expect(radio.getAttribute('checked')).toBe('checked');
});

it('should find and control a color input', () => {
  expect.assertions(1);
  const { getByTestId } = render(<ObstacleCourse />);
  const color = getByTestId('color-input');

  color.focus();

  color.setAttribute('value', '#fff000')

  expect(color.getAttribute('value')).toBe('#fff000');
});

it('should find and control a date input', () => {
  expect.assertions(1);
  const { getByTestId } = render(<ObstacleCourse />);
  const date = getByTestId('date-input');

  date.focus();

  date.setAttribute('value', '2020-01-01')

  expect(date.getAttribute('value')).toBe('2020-01-01');
});

it('should find and control a range input', () => {
  expect.assertions(1);
  const { getByTestId } = render(<ObstacleCourse />);
  const range = getByTestId('range-input');

  range.focus();

  range.setAttribute('value', '5')

  expect(range.getAttribute('value')).toBe('5');
});

it('should find and control a file input', () => {
  expect.assertions(1);
  const { getByTestId } = render(<ObstacleCourse />);
  const file = getByTestId('file-input');

  file.focus();

  file.setAttribute('value', 'file.txt')

  expect(file.getAttribute('value')).toBe('file.txt');
});
