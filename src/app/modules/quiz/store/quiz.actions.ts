import { createAction, props } from '@ngrx/store';
import { Question } from '../../core/models/question.model';

enum CounterActionType {
  fetch = '[Quiz] fetch questions',
  fetchSuccess = '[Quiz] fetch questions success',
  fetchFalied = '[Quiz] fetch questions failed',
}

export const FetchQuiz = createAction(
  CounterActionType.fetch,
  props<{ amount: number }>()
);

export const FetchQuizSuccess = createAction(
  CounterActionType.fetchSuccess,
  props<{ questions: Question[] }>()
);

export const FetchQuizFailed = createAction(
  CounterActionType.fetchFalied,
  props<{ errorMessage: string }>()
);
