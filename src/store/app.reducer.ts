import { Action, createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './app.actions';

export interface InitialState {
  contador: number;
  click: number;
}

export const initialState: InitialState = {
  contador: 0,
  click: 0,
};

const _contadorReducer = createReducer(
  initialState,
  // Incremento
  on(increment, (state) => {
    const contador = state.contador + 1;
    const click = state.click + 1;
    return { ...state, contador, click };
  }),
  // Decrementar
  on(decrement, (state) => {
    const contador = state.contador > 1 ? state.contador - 1 : 0;
    const click = state.click + 1;
    return { ...state, contador, click };
  }),
  // Reset
  on(reset, (state) => {
    const contador = 0;
    const click = state.click + 1;
    return { ...state, contador, click };
  })
);

export function contadorReducer(
  state: InitialState | undefined,
  action: Action
) {
  return _contadorReducer(state, action);
}
