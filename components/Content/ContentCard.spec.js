import { mount } from '@vue/test-utils';
import ContentCard from './ContentCard.vue';

function factory() {
  return mount(ContentCard);
}

describe('ContentCard', () => {
  test('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.vm).toBeTruthy()
  })
})
