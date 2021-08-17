import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexAnimatedComponent } from './index-animated/index-animated.component';


@NgModule({
  declarations: [ IndexAnimatedComponent ],
  imports: [
    CommonModule,
    IndexRoutingModule
  ],
  exports: [
    IndexAnimatedComponent
  ]
})
export class IndexModule { }
