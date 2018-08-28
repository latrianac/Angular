import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesComponent }      from './places/places.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PlaceDetailComponent }  from './place-detail/place-detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: PlaceDetailComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}

