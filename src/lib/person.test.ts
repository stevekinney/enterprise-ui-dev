import { describe, expect, it, test, beforeEach } from 'vitest';
import { areFriends, createPerson, isFriendOfFriend, Person } from './person';

const names = [
  {
    firstName: 'Madonna',
    middleName: undefined,
    lastName: undefined,
    fullName: 'Madonna',
  },

  {
    firstName: 'Madonna',
    middleName: undefined,
    lastName: 'Cicone',
    fullName: 'Madonna Cicone',
  },

  {
    firstName: 'Madonna',
    middleName: 'Louise',
    lastName: 'Cicone',
    fullName: 'Madonna Louise Cicone',
  },
] as const;

describe('Person', () => {
  test.each(names)(
    'creating a person with {firstName: $firstName, middleName: $middleName, lastName: $lastName} results in a full name of $fullName',
    ({ firstName, middleName, lastName, fullName }) => {
      const person = new Person({ firstName, middleName, lastName });
      expect(person.fullName).toBe(fullName);
    },
  );

  test.each(names)(
    'creating a person with full name of $fullName parses to [$firstName, $middleName, $lastName]',
    ({ firstName, middleName, lastName, fullName }) => {
      const person = new Person(fullName);
      expect(person.firstName).toBe(firstName);
      expect(person.middleName).toBe(middleName);
      expect(person.lastName).toBe(lastName);
    },
  );

  test.each(names)(
    'updating a full name parses correctly',
    ({ firstName, middleName, lastName, fullName }) => {
      const person = new Person('Cher');

      person.fullName = fullName;

      expect(person.fullName).toBe(fullName);
      expect(person.firstName).toBe(firstName);
      expect(person.middleName).toBe(middleName);
      expect(person.lastName).toBe(lastName);
    },
  );

  it('will throw if you provide an empty string', () => {
    expect(() => {
      new Person('');
    }).toThrow();
  });

  it('will throw a specific error message if you provide an empty string', () => {
    const errorMessage = 'fullName cannot be an empty string';

    expect(() => {
      new Person('');
    }).toThrowError(errorMessage);
  });

  it('will add a friend', () => {
    const john = new Person('John Lennon');
    const paul = new Person('Paul McCartney');

    john.addFriend(paul);

    expect(john.friends).contain(paul);
  });

  it('will mutually add a friend', () => {
    const john = new Person('John Lennon');
    const paul = new Person('Paul McCartney');

    john.addFriend(paul);

    expect(paul.friends).contain(john);
  });

  it('will remove a friend', () => {
    const john = new Person('John Lennon');
    const paul = new Person('Paul McCartney');

    john.addFriend(paul);
    john.removeFriend(paul);

    expect(john.friends).not.contain(paul);
  });

  it('will mutually remove friends', () => {
    const john = new Person('John Lennon');
    const paul = new Person('Paul McCartney');

    john.addFriend(paul);
    john.removeFriend(paul);

    expect(paul.friends).not.contain(john);
  });
});

describe('createPerson', () => {
  it('should create an instance of a Person', () => {
    expect(createPerson('Brendan Kelly')).toBeInstanceOf(Person);
  });
});

describe('isFriend', () => {
  it('return true if two people are friends', () => {
    const john = new Person('John Lennon');
    const paul = new Person('Paul McCartney');

    john.addFriend(paul);

    expect(areFriends(john, paul)).toBe(true);
  });
});

describe('isFriendOfFriend', () => {
  const john = new Person('John Lennon');
  const paul = new Person('Paul McCartney');
  const george = new Person('George Harrison');
  const ringo = new Person('Ringo Starr');
  const benjamin = new Person('Benjamin Oliver');

  john.addFriend(paul);
  paul.addFriend(george);
  george.addFriend(ringo);

  it.each([
    { source: john, target: paul, knowEachOther: true },
    { source: john, target: george, knowEachOther: true },
    { source: john, target: ringo, knowEachOther: true },
    { source: john, target: benjamin, knowEachOther: false },
  ])(
    'is $knowEachOther that $source.fullName knows $target.fullName',
    ({ source, target, knowEachOther }) => {
      expect(isFriendOfFriend(source, target)).toBe(knowEachOther);
    },
  );
});
