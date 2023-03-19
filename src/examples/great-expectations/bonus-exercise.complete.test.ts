import { describe, expect, it } from 'vitest';
import { KanbanBoard, defaultStatuses } from '$lib/kanban-board';

describe('Kanban Board', () => {
  it('should create a board with a title and an array of default statuses', () => {
    const title = 'Important Things';
    const board = new KanbanBoard(title);

    expect(board).toEqual({
      title: expect.any(String),
      statuses: expect.arrayContaining(defaultStatuses),
      url: expect.any(String),
    });
  });

  it('add a status to a board using #addStatus', () => {
    const title = 'Important Things';
    const status = 'Verifying';
    const board = new KanbanBoard(title);

    board.addStatus(status);

    expect(board).toEqual({
      title: expect.any(String),
      statuses: expect.arrayContaining([status]),
      url: expect.any(String),
    });
  });

  it('have a URL property that has the title in kebab case', () => {
    const title = 'Important Things';
    const board = new KanbanBoard(title);

    expect(board).toEqual(
      expect.objectContaining({
        url: 'https://example.com/boards/important-things',
      }),
    );
  });
});
