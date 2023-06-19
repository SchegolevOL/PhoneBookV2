import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Guid } from 'src/app/helpers/guid/guid';
import { IPhone } from 'src/app/models/iphone';
import { PhoneType } from 'src/app/models/phoneType/phone-type';

@Component({
  selector: 'app-phone-edit',
  templateUrl: './phone-edit.component.html',
  styleUrls: ['./phone-edit.component.scss'],
})
export class PhoneEditComponent {
  phoneTypes: PhoneType = new PhoneType();

  @Input() phone: IPhone = {
    id: '',
    name: '',
    surName: '',
    patronymic: '',
    phoneNumber: '',
    typePhone: '',
  };

  @Output() edit: EventEmitter<IPhone> = new EventEmitter();
  onFormEdit(type: string): void {
    console.log("edit")
    console.log(this.phone);    
    this.phone.typePhone = type;
    this.edit.emit(this.phone);
    this.phone.name = '';
    this.phone.surName = '';
    this.phone.patronymic = '';
    this.phone.phoneNumber = '';
    this.phone.typePhone = '';
  }
}
