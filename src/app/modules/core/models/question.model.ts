export interface Question {
  question: string;
  answers: string[];
  correct_answer: string;
  user_answer: string | null;
}

export interface QuestionResponse {
  response_code: number | string;
  results: QuestionResults[];
}

export interface QuestionResults extends IncorrectAnswers, Question {}

export interface IncorrectAnswers {
  incorrect_answers: string[];
}
