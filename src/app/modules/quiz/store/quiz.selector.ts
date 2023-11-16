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
export const selectQuestion = createSelector(
  selectQuiz,
  (state: QuizState) => state.questions[state.index].question
);
export const selectAllAnswers = createSelector(
  selectQuiz,
  (state: QuizState) => state.questions[state.index].answers
);
export const selectCurrentIndex = createSelector(
  selectQuiz,
  (state: QuizState) => state.index
);
export const selectPoints = createSelector(
  selectQuiz,
  (state: QuizState) => state.points
);
export const selectError = createSelector(
  selectQuiz,
  (state: QuizState) => state.fetchQuestionsErrorMessage
);
export const selectIsLastQuestion = createSelector(
  selectQuiz,
  (state: QuizState) => state.isLastQuestion
);
export const selectAllQuestions = createSelector(
  selectQuiz,
  (state: QuizState) => state.questions
);
