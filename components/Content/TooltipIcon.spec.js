import { mount } from '@vue/test-utils';
import TooltipIcon from './TooltipIcon.vue';

function factory() {
  return mount(TooltipIcon);
}

describe('TooltipIcon', () => {
  test('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.vm).toBeTruthy()
  })
})
