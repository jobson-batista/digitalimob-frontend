import { Routes } from '@angular/router';
import { CreateComponent } from './pages/enterprise/create/create.component';
import { CaptacaoComponent } from './pages/captacao/captacao.component';
import { ViewComponent } from './pages/enterprise/view/view.component';
import { CreateService } from './pages/enterprise/create/create.service';

export const routes: Routes = [
    { path: 'captacao', component: CaptacaoComponent },
    { path: 'adicionar-empreendimento', component: CreateComponent },
    { path: 'detalhes-do-empreendimento', component: ViewComponent },
    { path: '', redirectTo: 'captacao', pathMatch: 'full' }
];
