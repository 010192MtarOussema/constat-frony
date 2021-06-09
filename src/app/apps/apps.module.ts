import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';

import { AppsRoutingModule } from './apps-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactGridComponent } from './contact-grid/contact-grid.component';
import { SupportComponent } from './support/support.component';
import { FullCalendarModule } from '@fullcalendar/angular';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { reclamationComponent } from './reclamation/reclamation.component';
import { indemnisationComponent } from './indemnisation/indemnisation.component';

@NgModule({
  declarations: [
    CalendarComponent,
    indemnisationComponent,
    reclamationComponent,
    ChatComponent,
    DragDropComponent,
    PortfolioComponent,
    ContactListComponent,
    ContactGridComponent,
    SupportComponent,
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    FullCalendarModule,
    NgxDatatableModule,
    DragulaModule.forRoot()
  ]
})
export class AppsModule { }
