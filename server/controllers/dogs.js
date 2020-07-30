const dogs = require('../data/dogs.json');

exports.getByOffset = async (req, res) => {
  const { params: { offset } } = req;

  setTimeout(() => res.json(dogs[offset]), offset * 100);
};
