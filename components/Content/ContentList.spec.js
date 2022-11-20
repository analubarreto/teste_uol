import { mount, createLocalVue } from '@vue/test-utils';
import { Col } from 'element-ui';
import ContentList from './ContentList.vue';

describe('ContentList', () => {
  const localVue = createLocalVue();
  localVue.use(Col);
  test('is a Vue instance', () => {
    const wrapper = mount(ContentList);
    expect(wrapper.vm).toBeTruthy();
  })
})
