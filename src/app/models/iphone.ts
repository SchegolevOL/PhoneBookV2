import { Guid } from "../helpers/guid/guid";

export interface IPhone {
    id: Guid;
  name: string;
  surName: string;
  patronymic: string;
  phoneNumber: string;
  typePhone: string;
}
