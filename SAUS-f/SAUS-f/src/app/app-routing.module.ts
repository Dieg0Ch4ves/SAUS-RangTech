import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { HealthUnitComponent } from './components/health-unit/health-unit.component';

//Camada de rotas da aplicação

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'home', component: HomeComponent},
    {path: 'health-unit/:id', component: HealthUnitComponent},
    {path: '' , redirectTo: 'cadastro', pathMatch: "full"},
]

@NgModule ({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
