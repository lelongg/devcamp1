export class Site {
  private _name;

  constructor(name: string = '') {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}
