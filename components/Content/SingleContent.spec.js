import { mount, createLocalVue } from '@vue/test-utils';
import ElementUI from 'element-ui';
import SingleContent from './SingleContent.vue';

const localVue = createLocalVue();
localVue.use(ElementUI);

function factory(contentType) {
  return mount(SingleContent, { localVue }, {
    propsData: {
      content: {
        type: contentType
      }
    }
  });
}
describe('SingleContent', () => {
  test('can be seen', () => {
    const wrapper = factory('text');

    expect(wrapper.isVisible()).toBe(true);
  });
})
