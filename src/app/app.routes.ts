import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { SettingComponent } from './components/setting/setting.component';
import { WebComponent } from './components/web/web.component';
import { MobileComponent } from './components/mobile/mobile.component';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent},
    {path:"product",component:ProductsComponent},
    {path:"product",component:ProductsComponent},
    {path:"setting",component:SettingComponent,children:[
        {path:"web",component:WebComponent},
        {path:"mobile",component:MobileComponent},
    ]},
    {path:"**",component:NotFoundComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }