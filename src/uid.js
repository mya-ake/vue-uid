export default class Uid {
  constructor() {
    this._number;
    this.reset();
  }

  get number() {
    return this._number;
  }

  increment() {
    ++this._number;
  }

  reset() {
    this._number = 0;
  }
}
