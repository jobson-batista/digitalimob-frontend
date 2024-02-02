import { Routes } from '@angular/router';
import { CreateComponent } from './pages/enterprise/create/create.component';
import { CaptacaoComponent } from './pages/captacao/captacao.component';

export const routes: Routes = [
    { path: 'captacao', component: CaptacaoComponent },
    { path: 'adicionar-empreendimento', component: CreateComponent },
    { path: '', redirectTo: 'captacao', pathMatch: 'full' }
];
