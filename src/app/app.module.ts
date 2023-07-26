import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';

// Componentes
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { ListarProductosComponent2 } from './components/listar-productos2/listar-productos2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TiendaComponent } from './components//tienda/tienda.component';

import { AddAvatarComponent } from './components/add-avatar/add-avatar.component';
import { ListAvatarComponent } from './components/list-avatar/list-avatar.component';
import { EditAvatarComponent } from './components/edit-avatar/edit-avatar.component';
import { NavabarComponent } from './components/navabar/navabar.component';
import { CallbackPipe } from './callback.pipe';
import { FilterPeoplePipe } from './filter-people.pipe';
import { ArraySortPipe } from './array-sort-pipe.pipe';
import { ProductBuyComponent } from './components/product-buy/product-buy.component';
import { BuyPageComponent } from './components/buy-page/buy-page.component';
import { SafeHtmlPipe } from './safe-html.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    AddAvatarComponent,
    ListAvatarComponent,
    EditAvatarComponent,
    NavabarComponent,
    ModalComponent,
    CallbackPipe,
    FilterPeoplePipe,
    ArraySortPipe,
    ProductBuyComponent,
    BuyPageComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NgbModule,
    ListarProductosComponent,
    ListarProductosComponent2,
    TiendaComponent,
    RouterModule,
    FormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
