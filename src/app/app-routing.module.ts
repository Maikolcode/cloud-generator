import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloudGeneratorComponent } from './modules/cloud-generator/cloud-generator.component';

const routes: Routes = [
  { path: '', redirectTo: '/cloud-generator', pathMatch: 'full' },
  { path: 'cloud-generator', component: CloudGeneratorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
