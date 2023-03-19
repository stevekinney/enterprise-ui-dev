import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useItem } from './store/hooks';
import { remove, toggle, update } from './store/items-slice';

type ItemProps = {
  itemId: string;
};

const Item = ({ itemId }: ItemProps) => {
  const [editing, setEditing] = useState(false);
  const item = useItem(itemId);
  const dispatch = useDispatch();

  return (
    <li className="flex items-center gap-2">
      <input
        type="checkbox"
        className="focus:bg-red-500"
        checked={item.packed}
        id={`toggle-${item.id}`}
        onChange={() => dispatch(toggle({ id: itemId }))}
      />
      <label
        htmlFor={`toggle-${item.id}`}
        className={clsx({ hidden: editing })}
      >
        {item.name}
      </label>
      <input
        value={item.name}
        id={`edit-${item.id}`}
        className={clsx('py-0 text-sm', { hidden: !editing })}
        onChange={(event) =>
          dispatch(update({ id: itemId, name: event.target.value }))
        }
      />
      <div className="flex gap-2">
        <button
          className="px-2 py-0 text-xs"
          aria-label={`Edit ${item.name}`}
          onClick={() => setEditing(!editing)}
        >
          {editing ? '💾 Save' : '✍️ Edit'}
        </button>
        <button
          className="px-2 py-0 text-xs"
          aria-label={`Remove ${item.name}`}
          onClick={() => dispatch(remove({ id: itemId }))}
        >
          🗑 Remove
        </button>
      </div>
    </li>
  );
};

export default Item;
