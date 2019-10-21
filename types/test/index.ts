/* eslint-disable no-unused-vars */
import Vue, { ComponentOptions } from 'vue';
import VueUidPlugin, { VueUidOption, uid, vueUidMixin } from '../index';

/** plugin */
Vue.use<VueUidOption>(VueUidPlugin);
Vue.use<VueUidOption>(VueUidPlugin, {});
Vue.use<VueUidOption>(VueUidPlugin, { name: '$_uid' });

const vm = new Vue({
  mounted() {
    const uid: number = this.$_uid;
  },
});
const componentUid: number = vm.$_uid;

/** public api */
uid.reset();
uid.setName('uid');

/** mixin */
const Mixin: ComponentOptions<Vue> = {
  mixins: [vueUidMixin],
};
