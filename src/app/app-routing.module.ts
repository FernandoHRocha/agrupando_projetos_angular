import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora';
import { ConversorComponent } from './conversor';
import { DashboardComponent } from './dashboard';
import { JogoDaVelhaComponent } from './jogo-da-velha';
import { TarefaRoutes } from './tarefas';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'calculadora',
    component: CalculadoraComponent
  },
  {
    path: 'conversor',
    component: ConversorComponent
  },
  ...TarefaRoutes,
  {
    path:'jogo-da-velha',
    component: JogoDaVelhaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
