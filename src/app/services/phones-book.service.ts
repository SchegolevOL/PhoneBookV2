import { Injectable } from '@angular/core';
import { IPhone } from '../models/iphone';
import { Guid } from '../helpers/guid/guid';

@Injectable({
  providedIn: 'root',
})
export class PhonesBookService {
  private _phoneBook: Array<IPhone> = [];
  public tabHeader = new TabHeader();
  public selectPhone: IPhone = {
    id: '',
    name: '',
    surName: '',
    patronymic: '',
    phoneNumber: '',
    typePhone: '',
  };

  constructor() {}

  public get Phones(): Array<IPhone> {
    return this._phoneBook;
  }
  load(): void {
    let json = localStorage.getItem('list');
    if (json) {
      this._phoneBook = JSON.parse(json);
    }
  }
  add(phone: IPhone): void {
    console.log('==============================');
    console.log(phone);
    if (phone.name != '' && phone.phoneNumber != '') {
      console.log('good');
      this._phoneBook.push(phone);
      console.log(this._phoneBook);
    }
  }
  save(): void {
    localStorage.setItem('list', JSON.stringify(this._phoneBook));
  }
  remove(id: Guid):void {
    console.log('remove item');
    this._phoneBook = this._phoneBook.filter((x) => x.id != id);
  }
  edit(phone:IPhone):void{
    for (let i = 0; i < this._phoneBook.length; i++) {
      if (this._phoneBook[i].id == phone.id) {
        this._phoneBook[i]=phone;
      }
      
    }
  }



}






export class TabHeader {
  surName = 'Surname';
  name = 'Name';
  patronymic = 'Patrpnymic';
  phoneNumber = 'Phone Number';
  phoneType = 'Phone Type';
}
