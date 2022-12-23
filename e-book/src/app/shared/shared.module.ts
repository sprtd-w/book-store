import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedComponents } from "./components";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";



@NgModule({
  declarations: [
    ...sharedComponents
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ...sharedComponents
  ]
})
export class SharedModule { }
