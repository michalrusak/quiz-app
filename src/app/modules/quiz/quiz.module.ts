import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { QuestionComponent } from './components/question/question.component';

@NgModule({
  declarations: [QuestionComponent],
  imports: [SharedModule],
  exports: [QuestionComponent],
})
export class QuizModule {}
