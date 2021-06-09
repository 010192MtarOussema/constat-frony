import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { ContactGridComponent } from './contact-grid/contact-grid.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SupportComponent } from './support/support.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { reclamationComponent } from './reclamation/reclamation.component';
import { indemnisationComponent } from './indemnisation/indemnisation.component';

const routes: Routes = [
  {
    path: 'reclamation',
    component: reclamationComponent
  },
  {
    path: 'indemnisation',
    component: indemnisationComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'contact-grid',
    component: ContactGridComponent
  },
  {
    path: 'contact-list',
    component: ContactListComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'dragdrop',
    component: DragDropComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
