import { mount } from '@vue/test-utils';
import ContentCard from './ContentCard.vue';

function factory() {
  return mount(ContentCard);
}

describe('ContentCard', () => {
  test('renders content from the API', () => {
    const wrapper = factory()
    expect(wrapper.vm).toBeTruthy()
  })
})
