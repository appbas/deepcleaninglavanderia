import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqModule } from '../faq/faq.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ContatoModule } from '../contato/contato.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, FaqModule, ContatoModule],
})
export class HomeModule {}
