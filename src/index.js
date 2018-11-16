function install(Vue, { name = '$_uid' } = {}) {
  if (install.installed) return;
  install.installed = true;

  let uid = 0;
  Vue.mixin({
    beforeCreate() {
      this[name] = uid;
      ++uid;
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
