import { uidManager, mixin } from './mixin';

export const vueUidMixin = mixin;
export const uid = {
  reset() {
    uidManager.reset();
  },
};

function install(Vue, { name = '$_uid' } = {}) {
  if (install.installed) return;
  install.installed = true;

  uidManager.name = name;
  Vue.mixin({
    mixins: [mixin],
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
