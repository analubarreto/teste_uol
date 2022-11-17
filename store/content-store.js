import { defineStore } from 'pinia';

export const useContentStore = defineStore('contentStore', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      items: [],
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
