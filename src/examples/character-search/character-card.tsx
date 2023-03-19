export type Character = {
  id: string | number;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  type: string;
  department: string;
  occupation: string;
  strength: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  dexterity: number;
  constitution: number;
};

const CharacterCard = ({
  id,
  firstName,
  lastName,
  avatarUrl,
  type,
  department,
  occupation,
  strength,
  intelligence,
  wisdom,
  charisma,
  dexterity,
  constitution,
}: Character) => {
  return (
    <article className="flex flex-col gap-4 border-2 border-primary-200 p-2">
      <header className="flex flex-col items-center justify-between gap-2 border-2 border-primary-100 bg-primary-50 p-4 sm:flex-row sm:gap-4">
        <img src={avatarUrl} alt={`${firstName} ${lastName}`}></img>
        <h2 className="whitespace-nowrap">
          {firstName} {lastName}
        </h2>
        <p className="text-primary-300">#{id}</p>
      </header>
      <dl className="grid grid-cols-1 gap-2 text-xs md:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-2 flex flex-row gap-1 xl:col-span-1 xl:block">
          <dt>Type</dt>
          <dd>{type}</dd>
        </div>
        <div>
          <dt>Occupation</dt>
          <dd>{occupation}</dd>
        </div>
        <div>
          <dt>Department</dt>
          <dd>{department}</dd>
        </div>
      </dl>
      <dl className="grid grid-cols-2 gap-2 text-xs md:grid-cols-3 xl:grid-cols-6">
        <div>
          <dt>Strength</dt>
          <dd>{strength}</dd>
        </div>
        <div>
          <dt>Intelligence</dt>
          <dd>{intelligence}</dd>
        </div>
        <div>
          <dt>Wisdom</dt>
          <dd>{wisdom}</dd>
        </div>
        <div>
          <dt>Charisma</dt>
          <dd>{charisma}</dd>
        </div>
        <div>
          <dt>Dexterity</dt>
          <dd>{dexterity}</dd>
        </div>
        <div>
          <dt>Constitution</dt>
          <dd>{constitution}</dd>
        </div>
      </dl>
    </article>
  );
};

export default CharacterCard;
