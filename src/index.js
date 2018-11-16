import Uid from './uid';

export const uid = new Uid();

function install(Vue, { name = '$_uid' } = {}) {
  if (install.installed) return;
  install.installed = true;

  Vue.mixin({
    beforeCreate() {
      this[name] = uid.number;
      uid.increment();
    },
  });
}

const plugin = { install };

let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default plugin;
