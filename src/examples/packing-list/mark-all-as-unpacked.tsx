import { useDispatch } from 'react-redux';
import { markAllAsUnpacked } from './store/items-slice';

const MarkAllAsUnpacked = () => {
  const dispatch = useDispatch();
  return (
    <div className="mb-16">
      <button className="w-full" onClick={() => dispatch(markAllAsUnpacked())}>
        Mark All As Unpacked
      </button>
      <input className="hidden" /> {/* Weird… who put this here? */}
    </div>
  );
};

export default MarkAllAsUnpacked;
