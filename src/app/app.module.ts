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
import { EnglishClassComponent } from './components/english-class/english-class.component';
import { ExcelService } from './components/create-table//excel.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { EnglishListComponent } from './components/english-list/english-list.component';
import { EnglishTableComponent } from './components/english-table/english-table.component';
import { CreateTableComponent } from './components/create-table/create-table.component';
import { ListeningGameComponent } from './components/listening-game/listening-game.component';
import { EnglishListVerbComponent } from './components/english-list-verb/english-list-verb.component';
import { EnglishClassVerbComponent } from './components/english-class-verb/english-class-verb.component';
import { EnglishTableVerbComponent } from './components/english-table-verb/english-table-verb.component';
import { EnglishListItemComponent } from './components/english-list-item/english-list-item.component';
import { EnglishListConnectorsComponent } from './components/english-list-connectors/english-list-connectors.component';
import { EnglishListAdjectiveComponent } from './components/english-list-adjective/english-list-adjective.component';
import { ProductCreatorComponent } from './components/product-creator/product-creator.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { SellerCreatorComponent } from './components/seller-creator/seller-creator.component';


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
    SafeHtmlPipe,
    EnglishClassComponent,
    EnglishListComponent,
    EnglishTableComponent,
    CreateTableComponent,
    ListeningGameComponent,
    EnglishListVerbComponent,
    EnglishClassVerbComponent,
    EnglishTableVerbComponent,
    EnglishListItemComponent,
    EnglishListConnectorsComponent,
    EnglishListAdjectiveComponent
  , ProductCreatorComponent, PruebaComponent, SellerCreatorComponent],
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
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatDividerModule,
    MatButtonModule,




  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
