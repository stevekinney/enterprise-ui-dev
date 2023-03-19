import Frame from '$components/frame';
import Input from '$components/input';
import CharacterCard from './character-card';
import CharacterSearchInput from './search-input';

const character = {
  id: 1,
  firstName: 'Vivia',
  lastName: 'Try',
  avatarUrl: 'https://robohash.org/quassedquis.png?size=50x50&set=set1',
  type: 'Grass',
  department: 'Business Development',
  occupation: 'Mechanical Systems Engineer',
  strength: 17,
  intelligence: 15,
  wisdom: 15,
  charisma: 17,
  dexterity: 15,
  constitution: 16,
};

const CharacterSearch = () => {
  return (
    <Frame>
      <CharacterSearchInput />
      <div className="grid grid-cols-2 gap-4">
        <CharacterCard {...character} />
        <CharacterCard {...character} />
      </div>
    </Frame>
  );
};

export default CharacterSearch;
