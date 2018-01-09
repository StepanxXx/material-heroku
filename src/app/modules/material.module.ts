import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatCardModule} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatMomentDateModule, MatToolbarModule,MatIconModule, MatInputModule, MatInputModule, MatProgressSpinnerModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatMomentDateModule, MatToolbarModule, MatIconModule, MatInputModule, MatInputModule, MatProgressSpinnerModule, MatCardModule]
})

export class MaterialModule {}
