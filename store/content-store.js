import { defineStore } from 'pinia';
import gql from 'graphql-tag';

export const useContentStore = defineStore('contentStore', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      items: {
        contents: gql `{
          id,
          embeddable,
          allow_download,
          type,
          updated_at,
          created_at
        }`
      }
    }
  },
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    getContent() {
      try {
        // Do something
      } catch (err) {
        const error = new Error(err);
        return error;
      }
    },
  },
})
