import { Component, OnInit,  } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsCommponent implements OnInit {
  items: Item[] = []; //puse que es  = [] para inicializarla para que items no me tire error
  total: number = 0;

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    //this.items = [];
    this.items = this.itemService.getItems();
    this.getTotal();
  }



  deleteItem(item: Item){
    this.items = this.items.filter(x => x.id != item.id);
    this.getTotal();

  }

  toggleItem(item:Item){
    this.getTotal();
  }

  getTotal(){
    this.total = this.items
    .filter(item => !item.completed)
    .map(item => item.quantity * item.price )
    .reduce( (acc, item)  => acc += item, 0)
  }


}
