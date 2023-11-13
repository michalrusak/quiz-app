import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducers';
import * as QuizActions from '../../../quiz/store/quiz.actions';
import {
  selectAllAnswers,
  selectIsLastQuestion,
  selectQuestion,
} from '../../store/quiz.selector';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit, OnDestroy {
  question!: string;
  answers!: string[];
  sub = new Subscription();
  selectedAnswer!: string;
  isLastQuestion = false;
  constructor(private store: Store<AppState>) {}

  nextQuestion() {
    this.store.dispatch(QuizActions.AddAnswer({ answer: this.selectedAnswer }));
    if (this.isLastQuestion) {
      this.sub.unsubscribe();
    }
    this.selectedAnswer = '';
  }

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
  }

  ngOnInit(): void {
    this.sub.add(
      this.store.select(selectQuestion).subscribe({
        next: (value) => (this.question = value),
      })
    );

    this.sub.add(
      this.store.select(selectAllAnswers).subscribe({
        next: (value) => (this.answers = value),
      })
    );

    this.sub.add(
      this.store.select(selectIsLastQuestion).subscribe({
        next: (value) => {
          if (value) {
            this.isLastQuestion = value;
          }
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
