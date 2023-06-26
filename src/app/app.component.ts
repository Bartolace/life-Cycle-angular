import { Component, DoCheck, OnInit } from '@angular/core';
import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Item } from './interfaces/iItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app-lista-de-compras';
  listaDeCompras!: Array<Item>;
  itemParaSerEditado!: Item;

  constructor(private listaService: ListaDeCompraService) {}

  ngOnInit(): void {
    this.listaDeCompras = this.listaService.getListaDeCompra();
  }

  editarItem(item: Item) {
    this.itemParaSerEditado = item;
  }

  deletarItem(id: number) {
    const index = this.listaDeCompras.findIndex((item) => item.id == id);
    this.listaDeCompras.splice(index, 1);
  }

  limparLista(){
    this.listaService.limparLocalStorage();
    this.listaDeCompras = [];
  }
}
