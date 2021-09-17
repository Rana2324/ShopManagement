import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import{HttpClientModule} from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { CatageryComponent } from './catagery/catagery.component';
import { MobileComponent } from './mobile/mobile.component';
import { ComputerComponent } from './computer/computer.component';
import { LogineComponent } from './logine/logine.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { registerLocaleData } from '@angular/common';
import { CommonService } from './common.service';
import { Product2Component } from './product2/product2.component';
import { Header2Component } from './header2/header2.component';
import { Home2Component } from './home2/home2.component';
import { Registration2Component } from './registration2/registration2.component';
import { Login2Component } from './login2/login2.component';
import { Profile2Component } from './profile2/profile2.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'Product', component: ProductComponent
  },
  {
    path: 'Service', component: ServiceComponent
  },
  {
    path: 'Dashbord', component: DashbordComponent
  },
  {
    path:'Product2', component:Product2Component
  },
  {
    path:'header2', component:Header2Component
  },
  {
    path:'home2', component:Home2Component
  },
  {
    path:'registration2', component:Registration2Component
  },
  {
    path:'login2', component:Login2Component
  },
  {
    path:'profile2', component:Profile2Component
  },

  {
    path: 'Catagorey', 
    children: [
      { path: '', component: CatageryComponent },
      { path: 'mobile', component: MobileComponent },
      { path: 'laptop', component: MobileComponent }
    ]
  },
  {path:'login',component:LogineComponent},
  {path:'registration',component:RegestrationComponent},
  {
    path: '**', component: NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashbordComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    ServiceComponent,
    NotFoundComponent,
    CatageryComponent,
    MobileComponent,
    ComputerComponent,
    LogineComponent,
    RegestrationComponent,
    Product2Component,
    Header2Component,
    Home2Component,
    Registration2Component,
    Login2Component,
    Profile2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
