export class Customer {
  constructor(private _firstName: string, private _lastname: string) {}

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastname;
  }

  public set lastName(value: string) {
    this._lastname = value;
  }
}
