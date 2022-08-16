import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContainerComponent],
  imports: [CommonModule, BrowserModule, RouterModule],
  exports: [ContainerComponent],
})
export class ContainerModule {}
