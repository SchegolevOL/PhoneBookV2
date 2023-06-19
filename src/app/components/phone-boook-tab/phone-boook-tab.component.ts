import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Guid } from 'src/app/helpers/guid/guid';
import { IPhone } from 'src/app/models/iphone';
import { PhonesBookService } from 'src/app/services/phones-book.service';

@Component({
  selector: 'app-phone-boook-tab',
  templateUrl: './phone-boook-tab.component.html',
  styleUrls: ['./phone-boook-tab.component.scss']
})
export class PhoneBoookTabComponent implements OnInit {
  constructor(public phonesBookService: PhonesBookService) {}
  ngOnInit(): void {
    this.phonesBookService.load();
  } 
  @Output() removed:EventEmitter<Guid> = new EventEmitter();
  onRemovePhone(id:Guid):void{
    console.log(id)
    this.removed.emit(id);    
  } 
  @Output() edit:EventEmitter<IPhone> = new EventEmitter();
  onEditPhone(phone:IPhone):void{   
    this.edit.emit(phone);    
  }
}
