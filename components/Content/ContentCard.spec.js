import { mount, createLocalVue } from '@vue/test-utils';
import { Col } from 'element-ui';
import ContentCard from './ContentCard.vue';

describe('ContentCard', () => {
  const localVue = createLocalVue();
  localVue.use(Col);
  test('is a Vue instance', () => {
    const wrapper = mount(ContentCard);
    expect(wrapper.vm).toBeTruthy();
  })
})

