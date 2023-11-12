import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.reducers';
import { environment } from 'src/environments/environment.development';
import { QuestionResponse } from '../models/question.model';

@Injectable({
  providedIn: 'root',
})
export class QuizApiService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  getQuestionsFromApi(amount: number): Observable<QuestionResponse> {
    return this.http.get<QuestionResponse>(
      `${environment.apiUrl}amount=${amount}`,
      {}
    );
  }
}
