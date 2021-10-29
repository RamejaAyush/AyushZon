import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ITEM } from './ITEMS';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  localItem: string;
  Items: ITEM[];
  itemEditable: boolean = false;
  newName: string;
  newDesc: string;
  newPrice: number;

  constructor(private router: Router) {
    this.localItem = localStorage.getItem('items');
    if (this.localItem == null) {
      this.Items = [];
    } else {
      this.Items = JSON.parse(this.localItem);
    }
  }

  addItem(enteredName, enteredDesc, enteredPrice) {
    if (
      enteredName.value == '' ||
      enteredDesc.value == '' ||
      enteredPrice.value == 0
    ) {
      alert('Enter Valid Values');
    } else {
      let item: ITEM = {
        id: this.Items.length + 1,
        name: enteredName.value,
        desc: enteredDesc.value,
        price: enteredPrice.value,
      };
      this.Items.push(item);
      localStorage.setItem('items', JSON.stringify(this.Items));
      enteredName.value = '';
      enteredDesc.value = '';
      enteredPrice.value = 0;
      this.router.navigate(['dashboard']);
    }
  }

  deleteItem(item: ITEM) {
    const index = this.Items.indexOf(item);
    this.Items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(this.Items));
  }

  changeEditState() {
    this.itemEditable = !this.itemEditable;
  }

  editItem(item: ITEM, id, Ename, Edesc, Eprice) {
    if (
      id.value == null ||
      Ename.value == '' ||
      Edesc.value == '' ||
      Eprice.value == null
    ) {
      alert('Enter Valid Values');
    } else {
      let index: number = id.value - 1;
      this.Items[index].name = Ename.value;
      this.Items[index].desc = Edesc.value;
      this.Items[index].price = Eprice.value;
      localStorage.setItem('items', JSON.stringify(this.Items));
      this.itemEditable = false;
    }
  }
}
