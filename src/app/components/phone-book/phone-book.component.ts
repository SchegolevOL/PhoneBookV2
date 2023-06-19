import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Guid } from 'src/app/helpers/guid/guid';
import { IPhone } from 'src/app/models/iphone';
import { PhonesBookService } from 'src/app/services/phones-book.service';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss'],
})
export class PhoneBookComponent  {
  constructor(public phonesBookService: PhonesBookService) {}
  
  addPhone(phone: IPhone): void {
    console.log('-----------------------------');
    console.log(phone);
    this.phonesBookService.add(phone);
    this.phonesBookService.save();
    this.phonesBookService.load();
  }
  removePhone(id:Guid):void{
    this.phonesBookService.remove(id);
    this.phonesBookService.save();
  }
  editPhoneTab(phone: IPhone):void{
    console.log(phone)
    this.phonesBookService.selectPhone = phone;
  }
  editPhone(phone: IPhone): void {
    console.log('-----------------------------');
    console.log(phone);
    this.phonesBookService.edit(phone);
    this.phonesBookService.save();
    this.phonesBookService.load();
  }
}
