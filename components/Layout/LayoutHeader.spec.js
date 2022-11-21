import { mount, createLocalVue } from '@vue/test-utils';
import ElementUI from 'element-ui';
import LayoutHeader from './LayoutHeader.vue';

const localVue = createLocalVue();
localVue.use(ElementUI);

function factory(routeName) {
  return mount(LayoutHeader, { localVue }, {
    propsData: {
      content: {
        routeName
      }
    }
  });
}
describe('LayoutHeader', () => {
  test('isShown', () => {
    const wrapper = factory('index');
    expect(wrapper.exists()).toBe(true);
  });
})
