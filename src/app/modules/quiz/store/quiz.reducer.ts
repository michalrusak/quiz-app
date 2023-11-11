import { createReducer, on, Action } from '@ngrx/store';

export interface Question {
  question: string;
  answers: string[];
  correct_answer: string;
  user_answer: string | null;
}

export interface QuizState {
  amount: number;
  points: number;
  index: number;
  questions: Question[];
}

const initialStore: QuizState = {
  amount: 0,
  index: 0,
  points: 0,
  questions: [],
};

const _quizReducer = createReducer(
  initialStore
  // on
);

export function quizReducer(state: QuizState | undefined, action: Action) {
  return _quizReducer(state, action);
}
