import { shallowMount, createLocalVue } from '@vue/test-utils';
import ElementUI from 'element-ui';
import ContentList from './ContentList.vue';

describe('ContentList', () => {
  const localVue = createLocalVue();
  localVue.use(ElementUI);
  test('gets data from the api', () => {
    const wrapper = shallowMount(ContentList, { localVue }, {
      props: {
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
      }
    });
    expect(wrapper.element).toMatchSnapshot()
  });
})
