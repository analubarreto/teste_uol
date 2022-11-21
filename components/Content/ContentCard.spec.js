import { mount, createLocalVue } from '@vue/test-utils';
import ElementUI from 'element-ui';
import ContentCard from './ContentCard.vue';

describe('ContentCard', () => {
  const localVue = createLocalVue();
  localVue.use(ElementUI);
  const wrapper = mount(ContentCard, { localVue });
  test('is rendered on the screen', () => {
    expect(wrapper.isVisible()).toBe(true);
  });
})
