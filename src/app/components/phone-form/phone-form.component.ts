import { Component, EventEmitter, Output } from '@angular/core';
import { Guid } from 'src/app/helpers/guid/guid';
import { IPhone } from 'src/app/models/iphone';
import { PhoneType } from 'src/app/models/phoneType/phone-type';
import { TabHeader } from 'src/app/services/phones-book.service';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.scss'],
})
export class PhoneFormComponent {
  phoneTypes: PhoneType = new PhoneType();
  header = new TabHeader();
  @Output() added: EventEmitter<IPhone> = new EventEmitter();
  phone: IPhone = {
    id: '',
    name: '',
    surName: '',
    patronymic: '',
    phoneNumber: '',
    typePhone: '',
  };
  
  onFormSubmint(type: string): void {
    console.log(this.phone);
    this.phone.id = Guid.newGuid();
    this.phone.typePhone = type;
    this.added.emit(this.phone);
    this.phone.name = '';
    this.phone.surName = '';
    this.phone.patronymic = '';
    this.phone.phoneNumber = '';
    this.phone.typePhone = '';
    
  }
  
}
