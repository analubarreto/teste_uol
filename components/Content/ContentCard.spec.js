import { mount } from '@vue/test-utils';
import ElementUI from 'element-ui';
import ContentCard from './ContentCard.vue';

describe('ContentCard', () => {
  test('goes to correct route after clicking', async () => {
    const mockRoute = {
      params: {
        id: 1
      }
    }
    const mockRouter = {
      replace: jest.fn()
    }
    const wrapper = mount(ContentCard, {
      props: {},
      global: {
        plugins: [ElementUI],
        mocks: {
          $route: mockRoute,
          $router: mockRouter
        }
      }
    })
    await wrapper.trigger('click');

    expect(mockRouter.replace).toHaveBeenCalledTimes(1);
    expect(mockRouter.replace).toHaveBeenCalledWith('/contents/1');
  })
})
