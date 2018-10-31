    import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { BusquedaComponent } from '../../busqueda/busqueda.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { InicioComponent } from '../../inicio/inicio.component';
import { ListComponent } from '../../publicaciones/list/list.component';
import { EditComponent } from '../../publicaciones/edit/edit.component';
import { ConfirmacionComponent } from '../../confirmacion/confirmacion.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'busqueda', component: BusquedaComponent },
    { path: 'publicaciones/list', component: ListComponent },
    { path: 'publicaciones/edit', component: EditComponent },
    { path: 'confirmacion/:id', component: ConfirmacionComponent },
    { path: 'busqueda/view/:id', component: BusquedaComponent, runGuardsAndResolvers: 'always', },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
];
