import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';

// Modules will current route will load immediately
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule),
    // component: AuthComponent // This also can be done
    // This Module will be Eagerly loaded whenever application is initialized 
    // as it's default route else, it's lazy loaded
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(x => x.AdminModule),
    data: { preload: true, delay: 3000 } // Will load after delay of 6 seconds
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(x => x.DashboardModule),
    data: { preload: true, delay: 5000 } // Will load after delay of 5 seconds
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(x => x.ProductsModule)
    // This Module will be Lazy loaded whenever /products route is accessed
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { preloadingStrategy: CustomPreloadingStrategy } // Adding Custom Preloading Strategy class
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */