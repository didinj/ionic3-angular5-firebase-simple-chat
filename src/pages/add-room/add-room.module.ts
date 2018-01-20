import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddRoomPage } from './add-room';

@NgModule({
  declarations: [
    AddRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(AddRoomPage),
  ],
})
export class AddRoomPageModule {}
