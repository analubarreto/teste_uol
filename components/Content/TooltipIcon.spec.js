import { mount } from '@vue/test-utils';
import ElementUI from 'element-ui';
import TooltipIcon from './TooltipIcon.vue';

function factory() {
  return mount(TooltipIcon, {
    global: {
      plugins: [ElementUI],
    }
  });
}

describe('TooltipIcon', () => {
  test('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.vm).toBeTruthy()
  })
})
