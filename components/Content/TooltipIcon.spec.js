import { mount, createLocalVue } from '@vue/test-utils';
import { Tooltip } from 'element-ui';
import TooltipIcon from './TooltipIcon.vue';

describe('TooltipIcon', () => {
  const localVue = createLocalVue();
  localVue.use(Tooltip);
  test('is a Vue instance', () => {
    const wrapper = mount(TooltipIcon);
    expect(wrapper.vm).toBeTruthy();
  })
})
