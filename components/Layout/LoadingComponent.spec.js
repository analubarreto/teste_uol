import { mount } from '@vue/test-utils';
import LoadingComponent from './LoadingComponent.vue';

function factory(isShowingState) {
  return mount(LoadingComponent, {
    propsData: {
      isShowing: isShowingState
    }
  });
}

describe('LoadingComponent', () => {
  test('is hidden by default', () => {
    const wrapper = factory(false)
    expect(wrapper.isVisible()).toBe(false)
  });


  test('shows when needed', () => {
    const wrapper = factory(true)
    expect(wrapper.isVisible()).toBe(true)
  });
})
