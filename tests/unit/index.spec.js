import { shallowMount, createLocalVue } from '@vue/test-utils';
import BaseText from '~fixtures/components/BaseText.vue';
import MixinedBaseText from '~fixtures/components/MixinedBaseText.vue';

import VueUid, { uid } from '@/index';

describe('vue uid plugin', () => {
  describe('Plugin', () => {
    let localVue;
    beforeEach(() => {
      localVue = createLocalVue();
    });

    it('sets uid', () => {
      localVue.use(VueUid);
      const wrapper = shallowMount(BaseText, {
        localVue,
      });

      expect(wrapper.vm).toHaveProperty('$_uid');
      expect(String(wrapper.vm.$_uid)).toMatch(/[0-9]+/);
    });

    it('different components have different UID', () => {
      localVue.use(VueUid);
      const wrapper1 = shallowMount(BaseText, {
        localVue,
      });
      const wrapper2 = shallowMount(BaseText, {
        localVue,
      });

      const uid1 = wrapper1.vm.$_uid;
      const uid2 = wrapper2.vm.$_uid;
      expect(uid1 !== uid2).toBe(true);
    });

    it('sets options.name', () => {
      localVue.use(VueUid, { name: 'testUid' });
      const wrapper = shallowMount(BaseText, {
        localVue,
      });

      expect(wrapper.vm).toHaveProperty('testUid');
      expect(String(wrapper.vm.testUid)).toMatch(/[0-9]+/);
    });
  });

  describe('Public API', () => {
    let localVue;
    beforeEach(() => {
      localVue = createLocalVue();
      uid.reset();
      uid.setName('$_uid');
    });

    it('reset method', () => {
      localVue.use(VueUid);
      shallowMount(BaseText, {
        localVue,
      });

      uid.reset();

      const wrapper2 = shallowMount(BaseText, {
        localVue,
      });
      const uid2 = wrapper2.vm.$_uid;
      expect(uid2).toBe(1);
    });

    it('setName method', () => {
      uid.setName('testUid');
      const wrapper = shallowMount(MixinedBaseText);

      expect(wrapper.vm).toHaveProperty('testUid');
      expect(String(wrapper.vm.testUid)).toMatch(/[0-9]+/);
    });
  });
});
