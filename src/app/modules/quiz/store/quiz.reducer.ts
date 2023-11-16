import { createReducer, on, Action } from '@ngrx/store';
import * as QuizActions from './quiz.actions';
import { ViewEnum } from 'src/enums/view.enum';
import { Question } from '../../core/models/question.model';

export interface QuizState {
  amount: number;
  points: number;
  index: number;
  questions: Question[];
  fetchQuestionsErrorMessage: string | null;
  loading: boolean;
  view: string;
  isLastQuestion: boolean;
}

const initialStore: QuizState = {
  amount: 0,
  index: 0,
  points: 0,
  questions: [],
  fetchQuestionsErrorMessage: null,
  loading: false,
  view: ViewEnum.form,
  isLastQuestion: false,
};

const _quizReducer = createReducer(
  initialStore,
  on(QuizActions.FetchQuiz, (state, action) => ({
    ...state,
    loading: true,
  })),
  on(QuizActions.FetchQuizFailed, (state, action) => ({
    ...state,
    loading: false,
    fetchQuestionsErrorMessage: action.errorMessage,
  })),
  on(QuizActions.FetchQuizSuccess, (state, action) => ({
    ...state,
    questions: action.questions,
    loading: false,
    fetchQuestionsErrorMessage: null,
    amount: action.questions.length,
    view: ViewEnum.quiz,
    isLastQuestion: action.questions.length === 1 ? true : state.isLastQuestion,
  })),
  on(QuizActions.AddAnswer, (state, action) => ({
    ...state,
    questions: state.questions.map((q, index) =>
      index === state.index ? { ...q, user_answer: action.answer } : q
    ),
    points:
      state.questions[state.index].correct_answer === action.answer
        ? state.points + 1
        : state.points,
    index: state.index + 1,
    view: state.index + 1 === state.amount ? ViewEnum.quizResult : state.view,
    isLastQuestion:
      state.index + 2 === state.amount ? true : state.isLastQuestion,
  }))
);

export function quizReducer(state: QuizState | undefined, action: Action) {
  return _quizReducer(state, action);
}
