import { mount, createLocalVue } from '@vue/test-utils';
import ElementUI from 'element-ui';
import SingleContent from './SingleContent.vue';

const localVue = createLocalVue();
localVue.use(ElementUI);

function factory(contentType) {
  return mount(SingleContent, {
    localVue,
    propsData: {
      content: {
        type: contentType
      }
    }
  });
}
describe('SingleContent', () => {
  test('can be seen', () => {
    const wrapper = factory();

    expect(wrapper.isVisible()).toBe(true);
  });

  test('shows image if content type is image', () => {
    const wrapper = factory('image');
    const image = wrapper.get('.image');

    expect(image.exists()).toBe(true);
  });

  test('shows document if content type is document', () => {
    const wrapper = factory('document');
    const document = wrapper.get('.document');

    expect(document.exists()).toBe(true);
  });

  test('shows text if content type is text', () => {
    const wrapper = factory('text');
    const text = wrapper.get('.text');

    expect(text.exists()).toBe(true);
  });

  test('shows video if content type is video', () => {
    const wrapper = factory('video');
    const video = wrapper.get('.video');

    expect(video.exists()).toBe(true);
  });

  test('shows link if content type is link', () => {
    const wrapper = factory('link');
    const link = wrapper.get('.link');

    expect(link.exists()).toBe(true);
  });
})
