export const namespace = 'async-button-demo';

export interface State {
  isRunning: boolean;
  clickCount: number;
  lastCoords?: string;
}

export const initialState: State = {
  isRunning: false,
  clickCount: 0,
  lastCoords: undefined
}

export type OtherAction = { type: '' };
