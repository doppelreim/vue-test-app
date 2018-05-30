import { expect } from 'chai';
import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import VueRouter from 'vue-router';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const vueMock = createLocalVue();
    vueMock.use(VueRouter);

    const msg = 'new message';
    const wrapper = mount(HelloWorld, {
      router: new VueRouter(),
      propsData: { msg },
    });

    console.log(wrapper.html());

    expect(wrapper.text()).to.include(msg);
  });
});
