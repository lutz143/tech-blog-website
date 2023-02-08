const { Comment } = require('../models');

const commentSeeds = [
  {
    user_id: 1,
    post_id: 1,
    comment_date: `1/31/2023`,
    comment: "The Apple Watch is a great way to keep informed on Reddit webdev posts."
  },
  {
    user_id: 2,
    post_id: 1,
    comment_date: `2/1/2023`,
    comment: "I agree! I use it all of the time."
  },
  {
    user_id: 2,
    post_id: 2,
    comment_date: `2/3/2023`,
    comment: "I follow WSJ but mostly put my head in the sand."
  },
  {
    user_id: 3,
    post_id: 3,
    comment_date: `2/2/2023`,
    comment: "Just learned MVC. Great way to organize code!"
  },
  {
    user_id: 4,
    post_id: 3,
    comment_date: `2/4/2023`,
    comment: "Who wants to hire me as their senior developer?!?"
  }

]

const seedComments = () => Comment.bulkCreate(commentSeeds);

module.exports = seedComments;