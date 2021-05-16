import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'variaveis/home',
    loadChildren: () => import('./pages/variaveis/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'variaveis/detalhes',
    loadChildren: () => import('./pages/variaveis/detalhes/detalhes.module').then( m => m.DetalhesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
