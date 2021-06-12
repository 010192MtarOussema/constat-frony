import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ContactGridComponent } from './contact-grid/contact-grid.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SupportComponent } from './support/support.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { reclamationComponent } from './reclamation/reclamation.component';
import { IndemnisationComponent } from './indemnisation/indemnisation.component';
import { DemandeComponent } from './demande/demande.component';

const routes: Routes = [
  {
    path: 'reclamation',
    component: reclamationComponent
  },
  {
    path: 'indemnisation',
    component: IndemnisationComponent
  },
  {
    path: 'demande',
    component: DemandeComponent
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
