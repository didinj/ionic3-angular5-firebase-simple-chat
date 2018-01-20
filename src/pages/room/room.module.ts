import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomPage } from './room';

@NgModule({
  declarations: [
    RoomPage,
  ],
  imports: [
    IonicPageModule.forChild(RoomPage),
  ],
})
export class RoomPageModule {}
