import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { carSearch } from './carSearch/carSearch.component';
import { searchResult } from './searchResults/searchResults.component';

const routes: Routes = [
  { path: '', redirectTo: '/carSearch', pathMatch: 'full' },
  { path: 'carSearch', component: carSearch },
  { path: 'searchResults', component: searchResult }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
