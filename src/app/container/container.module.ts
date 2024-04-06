import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { NotificationModule } from '../notification/notification.module';

@NgModule({
  declarations: [ContainerComponent, HeaderComponent, MenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    NotificationModule,
    ContainerRoutingModule,
  ],
  exports: [ContainerComponent],
})
export class ContainerModule {}
