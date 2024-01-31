export interface UserDataType {
  email: string;
  password: string;
  confirmpassword: string;
  card: {
    cardname?: string;
    cardnumber?: number;
    cardexpirationdate?: number;
    cardcvv?: number;
  }[];
  name: string;
  lastname: string;
  phone: number;
  saved: number[];
  mytour: number[];
  oldtour: number[];
}
