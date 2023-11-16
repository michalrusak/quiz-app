import { Component, Input } from '@angular/core';
import { Question } from 'src/app/modules/core/models/question.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  @Input() question!: Question;
  @Input() index!: number;
}
