import { describe, expect, it } from 'vitest';
import { createPerson, Person } from '$lib/person';
import { KanbanBoard } from '$lib/kanban-board';

it('should pass if the two numbers would add up correctly in a language other than JavaScript', () => {
  expect(0.2 + 0.1).toBeCloseTo(0.3);
});

describe('createPerson', () => {
  it('should create an instance of a person', () => {
    const person = createPerson('Ada Lovelace');
    expect(person).toBeInstanceOf(Person);
  });
});

describe('KanbanBoard', () => {
  it('should include "Backlog" in board.statuses', () => {
    const board = new KanbanBoard('Things to Do');
    expect(board.statuses).toContain('Backlog');
  });

  it('should not include "Bogus" in board.statuses', () => {
    const board = new KanbanBoard('Things to Do');
    expect(board.statuses).not.toContain('Bogus');
  });

  it('should include an added status in board.statuses using #addStatus', () => {
    const board = new KanbanBoard('Things to Do');

    expect(board.statuses).not.toContain('Verifying');

    board.addStatus('Verifying');

    expect(board.statuses).toContain('Verifying');
  });

  it('should remove a status using #removeStatus', () => {
    const board = new KanbanBoard('Things to Do');
    const [status] = board.statuses;

    board.removeStatus(status);
    expect(board.statuses).not.toContain(status);
  });
});

describe('Person', () => {
  it('will create a person with a first name', () => {
    const person = new Person('Madonna');
    expect(person.firstName).toBe('Madonna');
    expect(person.middleName).toBeUndefined();
    expect(person.lastName).toBeUndefined();
  });

  it('will create a person with a first and last name', () => {
    const person = new Person('Madonna Cicone');
    expect(person.firstName).toBe('Madonna');
    expect(person.middleName).toBeUndefined();
    expect(person.lastName).toBe('Cicone');
  });

  it('will create a person with a first, middle, and last name', () => {
    const person = new Person('Madonna Louise Cicone');
    expect(person.firstName).toBe('Madonna');
    expect(person.middleName).toBe('Louise');
    expect(person.lastName).toBe('Cicone');
  });

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

const explode = () => {
  throw new Error('Something went terribly wrong');
};

describe('explode', () => {
  it('should throw an error', () => {
    expect(() => explode()).toThrow();
  });

  it('should throw a specific error', () => {
    expect(() => explode()).toThrowError('Something');
  });
});
