import { mount } from '@vue/test-utils';
import ContentCard from './ContentCard.vue';

describe('ContentCard', () => {
  test('goes to correct route after clicking', async () => {
    const mockRoute = {
      params: {
        id: 1
      }
    }
    const mockRouter = {
      push: jest.fn()
    }
    const wrapper = mount(ContentCard, {
      props: {},
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter
        }
      }
    })
    await wrapper.trigger('click');

    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith('/contents/1');
  })
})
