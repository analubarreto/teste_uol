import { mount, createLocalVue } from '@vue/test-utils';
import ElementUI from 'element-ui';
import TooltipIcon from './TooltipIcon.vue';

describe('TooltipIcon', () => {
  const localVue = createLocalVue();
  localVue.use(ElementUI);
  test('is visible', () => {
    const wrapper = mount(TooltipIcon, { localVue });
    expect(wrapper.isVisible()).toBeTruthy()
  });
})
