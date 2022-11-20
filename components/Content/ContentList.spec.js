import { shallowMount } from '@vue/test-utils';
import ContentList from './ContentList.vue';

describe('ContentList', () => {
  test('gets data from the api', async () => {
    const wrapper = shallowMount(ContentList);
    await wrapper.setData({
      contents: [
        {
          id: 'some-id',
          embeddable: true,
          allow_download: false,
          type: 'document',
          updated_at: '1638383143749',
          created_at: '1638383143749',
          title: 'Some title',
        }
      ]
    })
    expect(wrapper.element).toMatchSnapshot()
  });
})
