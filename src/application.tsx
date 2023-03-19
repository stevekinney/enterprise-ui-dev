import FizzBuzz from './examples/fizz-buzz';
import Counter from './examples/counter';
import CharacterSearch from './examples/character-search';
import SignUp from './examples/sign-up';
import PackingList from './examples/packing-list';
import ObstacleCourse from './examples/obstacle-course';

const Application = () => {
  return (
    <main className="flex flex-col gap-8">
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
