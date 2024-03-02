export interface BoxType {
  id: number;
  symbol: string | null;
}

export const boxes: BoxType[] = [
  { id: 0, symbol: null },
  { id: 1, symbol: null },
  { id: 2, symbol: null },
  { id: 3, symbol: null },
  { id: 4, symbol: null },
  { id: 5, symbol: null },
  { id: 6, symbol: null },
  { id: 7, symbol: null },
  { id: 8, symbol: null },
];

export const winningCoords = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
