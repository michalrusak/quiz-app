import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { QuizState } from './quiz.reducer';

export const selectQuiz = (state: AppState) => state.state;

export const selectQuizAmount = createSelector(
  selectQuiz,
  (state: QuizState) => state.amount
);
export const selectView = createSelector(
  selectQuiz,
  (state: QuizState) => state.view
);
