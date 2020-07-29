export default {
  nicholas: {
    fetch: () => ({ url: 'http://localhost:4000/nicholas' }),
  },
  dogs: {
    fetch: () => ({ url: 'https://dog.ceo/api/breeds/image/random' }),
  },
};
