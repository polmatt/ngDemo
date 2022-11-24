import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item= new Item(); //recibimos una propiedad de tipo item: que es del tipo de dato item que es referente a nuestra clase de datos
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter //delteItem es un evento personalizado, para eso puse EventEmitter, tiene el objeto <item>
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(item: Item){
    this.deleteItem.emit(item); //esto se emite y le llega a el padre(img component)
  }

  onToggle(item: Item){
    item.completed = !item.completed;
    this.toggleItem.emit(item);
  }

}

