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


const routes: Routes = [
  { path: '', component: ListarProductosComponent },
  { path: 'buy-page/:id', component: BuyPageComponent },
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
