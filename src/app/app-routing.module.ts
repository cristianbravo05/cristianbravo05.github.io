import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

// componentes
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { ListarProductosComponent2 } from './components/listar-productos2/listar-productos2.component';
import { TiendaComponent } from './components//tienda/tienda.component';
import { AddAvatarComponent } from './components/add-avatar/add-avatar.component';
import { EditAvatarComponent } from './components/edit-avatar/edit-avatar.component';
import { ListAvatarComponent } from './components/list-avatar/list-avatar.component';
import { ProductBuyComponent } from './components/product-buy/product-buy.component';
import { BuyPageComponent } from './components/buy-page/buy-page.component';
import { EnglishClassComponent } from './components/english-class/english-class.component';
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
import { SellerCreatorComponent } from './components/seller-creator/seller-creator.component';

const routes: Routes = [
  { path: '', component: ListarProductosComponent },
  { path: 'buy-page/:id', component: BuyPageComponent },
  { path: 'product-creator/:id', component: ProductCreatorComponent },
  { path: 'seller-creator/:id', component: SellerCreatorComponent },
  { path: 'english-class/:list', component: EnglishClassComponent },
  { path: 'english-class-verb/:list', component: EnglishClassVerbComponent },
  { path: 'englishList', component: EnglishListComponent },
  { path: 'englishListVerb', component: EnglishTableVerbComponent },
  { path: 'englishListItem', component: EnglishListItemComponent },
  { path: 'englishListConnector', component: EnglishListConnectorsComponent },
  { path: 'englishListAdjective', component: EnglishListAdjectiveComponent },
  { path: 'english-table/:list/:type', component: EnglishTableComponent },
  { path: 'english-list-verb/:list', component: EnglishListVerbComponent },
  { path: 'create-table', component: CreateTableComponent },
  { path: 'listening-game/:list', component: ListeningGameComponent },
  { path: 'lista3/:page/color', component: ListAvatarComponent },
  { path: 'product-buy/:id', component: ProductBuyComponent },
  { path: 'lista2', component: ListarProductosComponent2 },
  { path: 'hola', component: TiendaComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'editar-producto/:id', component: CrearProductoComponent },
  { path: 'add-avatar', component: AddAvatarComponent },
  { path: 'edit-avatar/:id', component: EditAvatarComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
