import { shallowMount } from '@vue/test-utils';
import MixinedBaseText from '~fixtures/components/MixinedBaseText.vue';

describe('vue uid mixin', () => {
  it('sets uid', () => {
    const wrapper = shallowMount(MixinedBaseText);
    expect(wrapper.vm).toHaveProperty('$_uid');
    expect(String(wrapper.vm.$_uid)).toMatch(/[0-9]+/);
  });

  it('different components have different UID', () => {
    const wrapper1 = shallowMount(MixinedBaseText);
    const wrapper2 = shallowMount(MixinedBaseText);
    const uid1 = wrapper1.vm.$_uid;
    const uid2 = wrapper2.vm.$_uid;
    expect(uid1 !== uid2).toBe(true);
  });
});
