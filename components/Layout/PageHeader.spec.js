import { mount } from '@vue/test-utils';
import PageHeader from './PageHeader.vue';

function factory() {
  return mount(PageHeader);
}

describe('ContentCard', () => {
  test('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.vm).toBeTruthy()
  })
})
