import { mount } from '@vue/test-utils';
import PageHeader from './PageHeader.vue';

describe('ContentCard', () => {
  test('can be seen', () => {
    const wrapper = mount(PageHeader);
    expect(wrapper.isVisible()).toBeTruthy()
  })
})
