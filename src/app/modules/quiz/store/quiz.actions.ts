import { createAction, props } from '@ngrx/store';
import { Question } from '../../core/models/question.model';

enum CounterActionType {
  fetch = '[Quiz] Fetch Questions',
  fetchSuccess = '[Quiz] Fetch Questions Success',
  fetchFalied = '[Quiz] Fetch Questions Failed',
  addAnswer = '[Quiz] Add Answer',
  restartQuiz = '[Quiz] Restart Quiz',
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

export const AddAnswer = createAction(
  CounterActionType.addAnswer,
  props<{ answer: string }>()
);

export const RestartQuiz = createAction(CounterActionType.restartQuiz);
