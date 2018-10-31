import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { BusquedaComponent } from '../../busqueda/busqueda.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
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
import { InputMaskModule} from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import {PaginatorModule} from 'primeng/paginator';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    CalendarModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    InputMaskModule
  ],
  declarations: [
    BusquedaComponent,
    ConfirmacionComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    InicioComponent,
    ListComponent,
    EditComponent,
    IconsComponent,
    NotificationsComponent,
    UpgradeComponent,
  ]
})

export class AdminLayoutModule {}
