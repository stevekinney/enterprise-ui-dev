import FizzBuzz from './examples/fizz-buzz';
import Counter from './examples/counter';
import CharacterSearch from './examples/character-search';
import SignUp from './examples/sign-up';
import PackingList from './examples/packing-list';
import ObstacleCourse from './examples/obstacle-course';
import TimeZone from './examples/time-zone';

const Application = () => {
  return (
    <main className="flex flex-col gap-8">
      <TimeZone getTodos />
      <FizzBuzz />
      <Counter />
      <CharacterSearch />
      <PackingList />
      <SignUp />
      <ObstacleCourse />
    </main>
  );
};

export default Application;
