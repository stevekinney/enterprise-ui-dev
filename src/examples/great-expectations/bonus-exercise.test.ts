import { describe, expect, it } from 'vitest';
import { KanbanBoard, defaultStatuses } from '$lib/kanban-board';

/**
 * expect.any(constructor): https://vitest.dev/api/expect.html#expect-any
 * expect.arrayContaining(): https://vitest.dev/api/expect.html#expect-arraycontaining
 * expect.objectContaining(): https://vitest.dev/api/expect.html#expect-objectcontaining
 */

describe('Kanban Board', () => {
  it('should create a board with a title and an array of default statuses', () => {
    const title = 'Important Things';
    const board = new KanbanBoard(title);
    expect(board).toEqual({
      title,
      statuses: expect.arrayContaining(defaultStatuses),
      url: expect.any(String),
    });
  });

  it('add a status to a board using #addStatus', () => {
    const title = 'Important Things';
    const status = 'Verifying';
    const board = new KanbanBoard(title);

    board.addStatus(status);
    expect(board.statuses).toEqual(expect.arrayContaining([status]));
  });

  it('have a URL property that has the title in kebab case', () => {
    const title = 'Important Things';
    const board = new KanbanBoard(title);
    const urlRegex = /^https:\/\/([^\/]+)\/([^\/]+)\/([a-z]+(?:-[a-z]+)*)$/;
    expect(board).toEqual({
      title: title,
      url: expect.stringMatching(urlRegex),
      statuses: expect.arrayContaining(defaultStatuses),
    });
  });
});
