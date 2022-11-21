import { mount, createLocalVue } from '@vue/test-utils';
import ElementUI from 'element-ui';
import PageHeader from './PageHeader.vue';

describe('ContentCard', () => {
  const localVue = createLocalVue();
  localVue.use(ElementUI);
  test('can be seen', () => {
    const wrapper = mount(PageHeader, { localVue });
    expect(wrapper.isVisible()).toBeTruthy()
  })
})
