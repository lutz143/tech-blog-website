const { Post } = require('../models');

const postSeeds = [
  {
    title: "Apple Watch",
    post: "I just purchased an Apple Watch and realized that I can follow my favorite developer handles on Reddit. Does anyone else do the same? Would love to hear your thoughts!",
    user_id: 3
  },
  {
    title: "News",
    post: "I want to hear from the development community about what news outlets we all follow. I am interested in creating a website that grabs the most happy and upbeat news of the day so we're not bombarded by sad and frightening news all of the time.",
    user_id: 1
  },
  {
    title: "MVC",
    post: "MVC is an architectural pattern that structures a codebase in three distinct sections, according to a software design philosophy known as the separation of concerns.",
    user_id: 2
  }

]

const seedPosts = () => Post.bulkCreate(postSeeds);

module.exports = seedPosts;