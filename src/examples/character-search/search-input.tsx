import Input from '$components/input';

const CharacterSearchInput = () => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <Input id="character-search input" label="Search" placeholder="Search…">
        <button className="btn-primary" type="submit">
          Submit
        </button>
      </Input>
    </form>
  );
};

export default CharacterSearchInput;
