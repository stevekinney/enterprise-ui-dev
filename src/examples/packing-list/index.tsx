import { Provider } from 'react-redux';
import Frame from '$components/frame';
import ItemList from './item-list';
import MarkAllAsUnpacked from './mark-all-as-unpacked';
import NewItem from './new-item';
import { store } from './store';

export const PackingList = () => {
  return (
    <Frame>
      <header>
        <h1>Packing List</h1>
      </header>
      <NewItem />
      <section className="flex flex-col gap-8 md:flex-row">
        <ItemList title="Unpacked Items" packed={false} />
        <ItemList title="Packed Items" packed={true} />
      </section>
      <MarkAllAsUnpacked />
    </Frame>
  );
};

const Application = () => {
  return (
    <Provider store={store}>
      <PackingList />
    </Provider>
  );
};

export default Application;
