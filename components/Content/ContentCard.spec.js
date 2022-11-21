import { mount, createLocalVue } from '@vue/test-utils';
import ElementUI from 'element-ui';
import ContentCard from './ContentCard.vue';

describe('ContentCard', () => {
  const localVue = createLocalVue();
  localVue.use(ElementUI);
  test('goes to correct route after clicking', async () => {
    const $route = {
      params: {
        id: 1
      }
    }
    const $router = {
      replace: jest.fn()
    }
    const wrapper = mount(ContentCard, { localVue }, {
      global: {
        mocks: {
          $route,
          $router
        }
      }
    })
    await wrapper.trigger('click');

    expect($router.replace).toHaveBeenCalledTimes(1);
    expect($router.replace).toHaveBeenCalledWith('/contents/1');
  })
})
