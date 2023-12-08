import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducers';
import * as QuizActions from '../../../../store/quiz.actions';
import {
  selectAllAnswers,
  selectCurrentIndex,
  selectIsLastQuestion,
  selectQuestion,
  selectQuizAmount,
} from '../../../../store/quiz.selector';

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
  index!: number;
  amountQuestion!: number;
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
      this.store.select(selectQuizAmount).subscribe({
        next: (value) => {
          this.amountQuestion = value;
        },
      })
    );

    this.sub.add(
      this.store.select(selectCurrentIndex).subscribe({
        next: (value) => {
          this.index = value + 1;
        },
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
