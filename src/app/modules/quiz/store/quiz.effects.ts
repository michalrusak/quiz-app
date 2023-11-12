import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as QuizActions from './quiz.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { QuizApiService } from '../../core/services/quiz-api.service';
import { QuestionResults } from '../../core/models/question.model';

@Injectable()
export class QuizEffects {
  fetchQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuizActions.FetchQuiz),
      switchMap((action) => {
        return this.quizApiService.getQuestionsFromApi(action.amount).pipe(
          map((questions) =>
            QuizActions.FetchQuizSuccess({
              questions: questions.results.map((elem: QuestionResults) => {
                return {
                  correct_answer: elem.correct_answer,
                  answers: [...elem.incorrect_answers, elem.correct_answer],
                  question: elem.question,
                  user_answer: null,
                };
              }),
            })
          ),
          catchError((err) =>
            of(QuizActions.FetchQuizFailed({ errorMessage: 'Error' }))
          )
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private quizApiService: QuizApiService
  ) {}
}
