import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { QuizModule } from './modules/quiz/quiz.module';
import { FormModule } from './modules/form/form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { quizReducer } from './modules/quiz/store/quiz.reducer';
import { QuizEffects } from './modules/quiz/store/quiz.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    QuizModule,
    FormModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ state: quizReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot(QuizEffects),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
