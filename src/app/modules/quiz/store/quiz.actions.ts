import { createAction, props } from '@ngrx/store';

enum CounterActionType {
  fetch = '[Quiz] fetch questions',
}

export const addNumber = createAction(
  CounterActionType.fetch,
  props<{ value: number }>()
);
