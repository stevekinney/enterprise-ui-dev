import { describe, expect, it } from 'vitest';
import { createPerson, Person } from '$lib/person';
import { KanbanBoard } from '$lib/kanban-board';

/**
 * toBe: https://vitest.dev/api/expect.html#tobe
 * toBeCloseTo: https://vitest.dev/api/expect.html#tobecloseto
 * toBeInstanceOf: https://vitest.dev/api/expect.html#tobeinstanceof
 * toBeUndefined: https://vitest.dev/api/expect.html#tobeundefined
 * toContain: https://vitest.dev/api/expect.html#tocontain
 * toThrow: https://vitest.dev/api/expect.html#tothrow
 * toThrowError: https://vitest.dev/api/expect.html#tothrowerror
 */

it('should pass if the two numbers would add up correctly in a language other than JavaScript', () => {
  expect(0.2 + 0.1).toBeCloseTo(0.3);
});

describe('createPerson', () => {
  it('should create an instance of a person', () => {
    const person = createPerson('Ada Lovelace');
    expect.hasAssertions();
    // Verify that person is an instance of a Person.
    expect(person).toBeInstanceOf(Person);
  });
});

describe('Kanban Board', () => {
  it('should include "Backlog" in board.statuses', () => {
    const board = new KanbanBoard('Things to Do');
    expect.hasAssertions();
    // Verify that board.statuses contains "Backlog".
    expect(board.statuses).toContain('Backlog');
  });

  it('should *not* include "Bogus" in board.statuses', () => {
    const board = new KanbanBoard('Things to Do');
    expect.hasAssertions();
    // Verify that board.statuses does not contain "Bogus".
    expect(board.statuses).not.toContain('Bogus');
  });

  it('should include an added status in board.statuses using #addStatus', () => {
    const board = new KanbanBoard('Things to Do');
    expect.hasAssertions();
    // Use board.addStatus to add a status.
    board.addStatus('Dummy Status');
    // Verify that the new status is—in fact—now in board.statuses.
    expect(board.statuses).toContain('Dummy Status');
  });

  it('should remove a status using #removeStatus', () => {
    const board = new KanbanBoard('Things to Do');
    expect.hasAssertions();
    // Use board.removeStatus to remove a status.
    board.removeStatus('Backlog');

    // You can be clever or you can just assume "Backlog" is in board.statuses
    // by default.

    // Verify that the status is no longer in in board.statuses.
    expect(board.statuses).not.toContain('Backlog');
  });
});

describe('Person', () => {
  it('will create a person with a first name', () => {
    const person = new Person('Madonna');
    expect.hasAssertions();
    // Verify that person.firstName is correct.
    expect(person.firstName).toBe('Madonna');
  });

  it('will create a person with a first and last name', () => {
    const person = new Person('Madonna Cicone');
    expect.hasAssertions();
    // Verify that person.lastName is correct.
    expect(person.lastName).toBe('Cicone');
  });

  it('will create a person with a first, middle, and last name', () => {
    const person = new Person('Madonna Louise Cicone');
    expect.hasAssertions();
    // Verify that person.middleName is correct.
    expect(person.middleName).toBe('Louise');
  });

  it('will throw if you provide an empty string', () => {
    const fn = () => {
      new Person('');
    };

    expect.hasAssertions();

    // Verify that function above throws.
    expect(fn).toThrow();
  });

  it('will throw a specific error message if you provide an empty string', () => {
    const errorMessage = 'fullName cannot be an empty string';

    const fn = () => {
      new Person('');
    };

    expect.hasAssertions();

    // Verify that function above throws the error message above.
    expect(fn).toThrowError(errorMessage);
  });

  it('will add a friend', () => {
    const john = new Person('John Lennon');
    const paul = new Person('Paul McCartney');

    john.addFriend(paul);

    expect.hasAssertions();

    // Verify that john.friends contains paul.
    expect(john.friends).toContain(paul);
  });

  it('will mutually add a friend', () => {
    const john = new Person('John Lennon');
    const paul = new Person('Paul McCartney');

    john.addFriend(paul);

    expect.hasAssertions();

    // Verify that paul.friends contains john.
    expect(paul.friends).toContain(john);
  });

  it('will remove a friend', () => {
    const john = new Person('John Lennon');
    const paul = new Person('Paul McCartney');

    john.addFriend(paul);
    john.removeFriend(paul);

    expect.hasAssertions();

    // Verify that john.friends does not include paul.
    expect(john.friends).not.toContain(paul);
  });

  it('will mutually remove friends', () => {
    const john = new Person('John Lennon');
    const paul = new Person('Paul McCartney');

    john.addFriend(paul);
    john.removeFriend(paul);

    expect.hasAssertions();

    // Verify that paul.friends does not include john.
    expect(paul.friends).not.toContain(john);
  });
});

const explode = () => {
  throw new Error('Something went terribly wrong');
};

describe('explode', () => {
  it('should throw an error', () => {
    expect(() => explode()).toThrow();
  });

  it('should throw a specific error containing "terribly wrong"', () => {
    expect(() => explode()).toThrowError('Something went terribly wrong');
  });
});
