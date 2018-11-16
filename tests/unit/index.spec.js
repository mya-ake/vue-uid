import { shallowMount, createLocalVue } from '@vue/test-utils';
import BaseText from '~fixtures/components/BaseText.vue';

import VueUid from '@/index';

describe('vue uid plugin', () => {
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
