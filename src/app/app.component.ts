import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from './store/app.reducers';
import { selectView } from './store/quiz.selector';
import { ViewEnum } from 'src/enums/view.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'quiz-app';
  sub!: Subscription;
  view!: string;
  ViewEnum = ViewEnum;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.sub = this.store.select(selectView).subscribe({
      next: (value) => (this.view = value),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
