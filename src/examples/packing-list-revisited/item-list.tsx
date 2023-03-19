import { toKebabCase } from '$lib/to-kebab-case';
import { useItemIds } from './store/hooks';
import Item from './item';

type ItemsProps = {
  title: string;
  packed: boolean;
};

const ItemList = ({ title, packed }: ItemsProps) => {
  const id = toKebabCase(title);
  const itemIds: string[] = useItemIds(packed);

  return (
    <section
      id={id}
      className="w-full border-2 border-primary-200 p-4"
      data-testid={id}
    >
      <header className="mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
      </header>
      <ul className="flex flex-col gap-2" data-testid={`${id}-list`}>
        {itemIds.map((itemId) => (
          <Item key={itemId} itemId={itemId} />
        ))}
      </ul>
      {!itemIds.length && (
        <p className="text-primary-400">(Nothing to show.)</p>
      )}
    </section>
  );
};

export default ItemList;
