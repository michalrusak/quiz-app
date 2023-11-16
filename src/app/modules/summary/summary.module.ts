import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SummaryListComponent } from './components/summary-list/summary-list.component';
import { SummaryComponent } from './components/summary/summary.component';

@NgModule({
  declarations: [SummaryListComponent, SummaryComponent],
  imports: [SharedModule],
  exports: [SummaryListComponent],
})
export class SummaryModule {}
