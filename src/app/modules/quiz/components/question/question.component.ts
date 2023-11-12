import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
