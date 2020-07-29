const lodash = require('lodash');

const thingsAboutNicholas = [
  'Fun Human',
  'nudge...',
  'Def Not Bot',
  'nudge...',
  'Enjoys Elixir',
  'nudge...',
  'Can I pet your dog?',
  'Hey Mark, when are you going to present?',
  'Actor',
  'nudge...',
  'Comedian',
  'nudge...',
  'Flatiron School grad',
  'Goes to the beach',
  'Gatsby developer',
  'Person',
  'Food Critic',
  'Person who cooks',
  'Lives in Brooklyn',
  'Boot Campers Anonymous',
  'Has Roommates',
  'Person',
  'Video Games',
];

exports.get = async (req, res) => {
  const { query: { count } } = req;

  const response = lodash.times(count, (index) => {
    const randomIndexOfThings = Math
      .floor(Math.random() * Math.floor(thingsAboutNicholas.length - 1));
    const randomThingAboutNicholas = thingsAboutNicholas[randomIndexOfThings];

    const randomSaturation = 30 + Math.floor(Math.random() * Math.floor(70));
    const randomHueRotation = Math.floor(Math.random() * Math.floor(360));

    return {
      id: index,
      label: randomThingAboutNicholas,
      saturate: randomSaturation,
      hueRotate: randomHueRotation,
    };
  });

  setTimeout(() => res.json(response), count * 100);
};
