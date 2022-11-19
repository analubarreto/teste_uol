import { mount } from '@vue/test-utils';
import ContentList from './ContentList.vue';

function factory() {
  return mount(ContentList);
}

describe('ContentList', () => {
  test('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.vm).toBeTruthy()
  })
})
