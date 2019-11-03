import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',// quando não tiver nada vai para home
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'instalacao',
   loadChildren: './instalacao/instalacao.module#InstalacaoPageModule' 
  },
   { path: 'layout',
   loadChildren: './layout/layout.module#LayoutPageModule' 
  },
  { path: 'layout-header-footer', loadChildren: './layout-header-footer/layout-header-footer.module#LayoutHeaderFooterPageModule' },
  { path: 'layout-tabs', loadChildren: './layout-tabs/layout-tabs.module#LayoutTabsPageModule' },
  { path: 'layout-menu', loadChildren: './layout-menu/layout-menu.module#LayoutMenuPageModule' },
  { path: 'layout-split-pane', loadChildren: './layout-split-pane/layout-split-pane.module#LayoutSplitPanePageModule' }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
