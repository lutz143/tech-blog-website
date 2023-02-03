const { Comment } = require('../models');

const commentSeeds = [
  {
    user_id: 1,
    post_id: 1,
    comment: "The Apple Watch is a great way to keep informed on Reddit webdev posts."
  },
  {
    user_id: 2,
    post_id: 1,
    comment: "I agree! I use it all of the time."
  },
  {
    user_id: 2,
    post_id: 2,
    comment: "I follow WSJ but mostly put my head in the sand."
  },
  {
    user_id: 3,
    post_id: 3,
    comment: "Just learned MVC. Great way to organize code!"
  },
  {
    user_id: 4,
    post_id: 3,
    comment: "Who wants to hire me as their senior developer?!?"
  }

]

const seedComments = () => Comment.bulkCreate(commentSeeds);

module.exports = seedComments;