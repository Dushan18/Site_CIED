import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'asac',
        loadChildren: () => import('./asac/features/auth.routes'),
        //
    },
    {
        path: '**',
        redirectTo: 'asac',
    }
];
