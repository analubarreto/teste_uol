import { mount } from '@vue/test-utils';
import LoadingComponent from './LoadingComponent.vue';

function factory(isShowingState) {
  return mount(LoadingComponent, {
    props: {
      isShowing: isShowingState
    }
  });
}

describe('LoadingComponent', () => {
  test('is hidden by default', () => {
    const wrapper = factory(false)
    expect(wrapper.isVisible()).toBe(false)
  })
})
