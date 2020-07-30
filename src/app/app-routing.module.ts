import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { StudentsResultsComponent } from './students-results/StudentsResultsComponent';

const routes: Routes = [
  { path: '', redirectTo: '/students-results', pathMatch: 'full' },
  { path: 'students-results', component: StudentsResultsComponent },
  { path: 'admission-page', component: AdmissionFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
