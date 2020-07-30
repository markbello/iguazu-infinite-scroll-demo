const dogs = require('../data/dogs.json');

exports.getByOffset = async (req, res) => {
  const { query: { offset } } = req;
  const sanitizedOffset = Number(offset);

  const { manyDogs: { data: dogUrls } } = dogs;

  if (Number(offset) === 0) {
    const urlsToSend = dogUrls.slice(0, 24);
    return setTimeout(() => res.json({ count: sanitizedOffset + 25, data: urlsToSend }), 100 * 25);
  }
  const startIndex = sanitizedOffset - 1;
  const endIndex = startIndex + 25;
  const urlsToSend = dogUrls.slice(startIndex, endIndex);
  return setTimeout(() => res.json({ count: sanitizedOffset + 25, data: urlsToSend }), 100 * 25);
};
