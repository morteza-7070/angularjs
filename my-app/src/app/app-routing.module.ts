import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {IntroductionComponent} from './introduction/introduction.component';
import {SkillsComponent} from './skills/skills.component';


const routes: Routes = [{path:'home',component: HomeComponent},
{path:'introduction',component: IntroductionComponent},
{path:'skills',component: SkillsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
