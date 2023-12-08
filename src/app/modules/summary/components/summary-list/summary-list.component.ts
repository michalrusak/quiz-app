import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Question } from 'src/app/modules/core/models/question.model';
import {
  selectAllQuestions,
  selectPoints,
  selectQuizAmount,
} from 'src/app/modules/quiz/store/quiz.selector';
import { AppState } from 'src/app/store/app.reducers';
import * as QuizActions from '../../../quiz/store/quiz.actions';

@Component({
  selector: 'app-summary-list',
  templateUrl: './summary-list.component.html',
  styleUrls: ['./summary-list.component.scss'],
})
export class SummaryListComponent implements OnInit, OnDestroy {
  questions!: Question[];
  points!: number;
  amount!: number;
  sub = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.sub.add(
      this.store.select(selectAllQuestions).subscribe({
        next: (value) => (this.questions = value),
      })
    );
    this.sub.add(
      this.store.select(selectPoints).subscribe({
        next: (value) => (this.points = value),
      })
    );
    this.sub.add(
      this.store.select(selectQuizAmount).subscribe({
        next: (value) => (this.amount = value),
      })
    );
  }

  restartQuiz(): void {
    this.store.dispatch(QuizActions.RestartQuiz());
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
