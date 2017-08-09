import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'bootstrap';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { BillProductComponent } from './bill-product/bill-product.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserService} from './user.service';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';   

const appRoutes: Routes=[
  {
    path:"add-product",
    component:AddProductComponent
  },
  {
    path:"edit-product",
    component:EditProductComponent
  },
  {
    path:"bill-product",
    component:BillProductComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    EditProductComponent,
    BillProductComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    BrowserModule,
    Ng2AutoCompleteModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
