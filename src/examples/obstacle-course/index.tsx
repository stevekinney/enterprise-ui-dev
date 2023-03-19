import { useReducer, useState } from 'react';

const avengers = [
  'Iron Man',
  'Black Widow',
  'Thor',
  'Hulk',
  'Captain America',
  'Hawkeye',
] as const;

const toppingsState = {
  Onion: false,
  Sardines: false,
  Tomato: false,
  Lettuce: false,
} as const;

const toppings = Object.keys(toppingsState);

const beatles = ['John', 'Paul', 'George', 'Ringo'];

type Topping = keyof typeof toppingsState;
type Beatle = (typeof beatles)[number];

const toppingsReducer = (
  toppings: Record<Topping, boolean> = {
    Onion: false,
    Sardines: false,
    Tomato: false,
    Lettuce: false,
  },
  action: { topping: Topping; checked: boolean },
) => {
  return { ...toppings, [action.topping]: action.checked };
};

const isTopping = (s: string): s is Topping => {
  return toppings.includes(s);
};

const ObstacleCourse = () => {
  const [text, setText] = useState<string>('');
  const [favoriteAvenger, setFavoriteAvenger] = useState<string>('Black Widow');
  const [toppings, dispatch] = useReducer(toppingsReducer, toppingsState);
  const [favoriteBeatle, setFavoriteBeatle] = useState<Beatle>('Paul');
  const [color, setColor] = useState<string>('#FF0000');
  const [date, setDate] = useState<string>('2021-12-17');
  const [rating, setRating] = useState('4');
  const [file, setFile] = useState<string>('');

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center gap-2 border-2 border-purple-300 p-2">
        <label htmlFor="deep-thought">Deep Thought</label>
        <input
          placeholder="Some text…"
          id="deep-thought"
          value={text}
          onChange={(e) => setText(e.target.value)}
          data-testid="text-input"
        />
      </div>
      <div className="flex items-center justify-around border-2 border-purple-300 p-2">
        <p data-testid="text-result">{text}</p>
      </div>
      <div className="border-2 border-purple-300 p-2">
        <label htmlFor="avenger">Favorite Avenger</label>
        <select
          value={favoriteAvenger}
          id="avenger"
          data-testid="select-input"
          onChange={(e) => setFavoriteAvenger(e.target.value)}
        >
          {avengers.map((avenger) => (
            <option key={avenger}>{avenger}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center justify-around border-2 border-purple-300 p-2">
        <p data-testid="select-result">{favoriteAvenger || 'No one'}</p>
      </div>
      <div className="border-2 border-purple-300 p-2">
        <h3>Toppings</h3>
        {Object.keys(toppingsState).map((topping) => (
          <div className="flex items-center gap-2" key={topping}>
            <input
              type="checkbox"
              id={topping.toLocaleLowerCase()}
              name="toppings"
              value={topping}
              onChange={(e) => {
                if (!isTopping(e.target.value)) return;
                dispatch({
                  topping: e.target.value,
                  checked: e.target.checked,
                });
              }}
              data-testid="checkbox-{topping.toLocaleLowerCase()}"
            />
            <label className="list" htmlFor={topping.toLocaleLowerCase()}>
              {topping}
            </label>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-around border-2 border-purple-300 p-2">
        <p data-testid="checkbox-result">
          {Object.keys(toppings).join(', ') || '(None)'}
        </p>
      </div>
      <div className="border-2 border-purple-300 p-2">
        <h3>Favorite Beatle</h3>
        {beatles.map((beatle) => (
          <div className="flex items-center gap-2" key={beatle}>
            <input
              type="radio"
              name="beatles"
              id={beatle.toLowerCase()}
              value={beatle}
              onChange={(e) => setFavoriteBeatle(e.target.value)}
              data-testid="radio-{beatle.toLowerCase()}"
            />
            <label className="list" htmlFor={beatle.toLowerCase()}>
              {beatle}
            </label>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-around border-2 border-purple-300 p-2">
        <p data-testid="radio-result">{favoriteBeatle}</p>
      </div>
      <div className="flex items-center gap-2 border-2 border-purple-300 p-2">
        <label htmlFor="color">Favorite Color</label>
        <input
          type="color"
          className="h-10 w-20"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          data-testid="color-input"
        />
      </div>
      <div
        className="flex items-center justify-around gap-2 border-2 border-purple-300 p-2"
        style={{ color }}
        data-testid="color-container"
      >
        <p data-testid="color-result">{color}</p>
      </div>
      <div className="flex items-center gap-2 border-2 border-purple-300 p-2">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          data-testid="date-input"
        />
      </div>
      <div className="flex items-center justify-around border-2 border-purple-300 p-2">
        <p data-testid="date-result">{date}</p>
      </div>
      <div className="border-2 border-purple-300 p-2">
        <label htmlFor="rating">Rating</label>
        <input
          type="range"
          name="rating"
          id="rating"
          min="0"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          data-testid="range-input"
        />
      </div>
      <div className="flex items-center justify-around border-2 border-purple-300 p-2">
        <p data-testid="range-result">{rating}</p>
      </div>
      <div className="flex items-center gap-2 border-2 border-purple-300 p-2">
        <label htmlFor="resume">Résumé</label>
        <input
          type="file"
          name="resume"
          id="resume"
          value={file}
          onChange={(e) => setFile(e.target.value)}
          data-testid="file-input"
        />
      </div>
      <div className="flex items-center justify-around border-2 border-purple-300 p-2">
        <p data-testid="file-result">{file || ''}</p>
      </div>
    </div>
  );
};

export default ObstacleCourse;
