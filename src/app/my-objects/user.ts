export class User {
  public id: number;
  public email: string;
  public password: string;
  public name: string;
  public surname: string;


  constructor(id: number, email: string, password: string, name: string, surname: string) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
    this.surname = surname;
  }
}
