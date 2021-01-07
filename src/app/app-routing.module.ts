import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule)
  },
  {
    path: 'in-app-browser',
    loadChildren: () =>
      import('./in-app-browser/in-app-browser.module').then(
        (m) => m.InAppBrowserPageModule
      )
  },
  {
    path: 'social-sharing',
    loadChildren: () =>
      import('./social-sharing/social-sharing.module').then(
        (m) => m.SocialSharingPageModule
      )
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
