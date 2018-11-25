export default class UidManager {
  constructor({ name = '$_uid' } = {}) {
    this._name = name;
    this._number;
    this.reset();
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get uid() {
    return this._number;
  }

  increment() {
    ++this._number;
  }

  reset() {
    this._number = 0;
  }
}
