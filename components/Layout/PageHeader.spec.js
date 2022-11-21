import { mount, createLocalVue } from '@vue/test-utils';
import ElementUI from 'element-ui';
import PageHeader from './PageHeader.vue';

const localVue = createLocalVue();
localVue.use(ElementUI);
function factory() {
  return mount(PageHeader, { localVue }, {
    propsData: {
      content: {
        embeddable: false,
        allow_download: false,
      }
    }
  });
}
describe('ContentCard', () => {
  test('can be seen', () => {
    const wrapper = factory();
    expect(wrapper.isVisible()).toBe(true);
  });
  test('download button is disabled if download is disallowed', () => {
    const wrapper = factory();
    const downloadButton = wrapper.find('#download-button');

    expect(downloadButton.element.disabled).toBe(true);
  });
  test('embed button is disabled if embedding is disallowed', () => {
    const wrapper = factory();
    const embedButton = wrapper.find('#embed-button');

    expect(embedButton.element.disabled).toBe(true);
  });
})
