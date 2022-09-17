import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiboComponent } from './fibo/fibo.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FiboComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[FiboComponent]
})
export class HomeModule { }
