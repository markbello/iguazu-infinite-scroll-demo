export default {
  nicholas: {
    fetch: () => ({ url: 'http://localhost:4000/nicholas' }),
  },
  dogs: {
    fetch: () => ({ url: 'http://localhost:4000/dogs/:id' }),
  },
};
