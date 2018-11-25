import UidManager from './uid-manager';

export const uidManager = new UidManager();

export const mixin = {
  beforeCreate() {
    this[uidManager.name] = uidManager.uid;
    uidManager.increment();
  },
};
