const { User } = require('../models');

const userSeeds = [
  {
    username: "lutz143",
    github: "lutz143",
    email: "lutz_143@yahoo.com",
    password: "fakePass"
  },
  {
    username: "bond007",
    github: "test1",
    email: "ianflemming@yahoo.com",
    password: "bond007!"
  },
  {
    username: "jedi_luke",
    github: "test2",
    email: "skywalker@yahoo.com",
    password: "vader13!"
  },
  {
    username: "bowman",
    github: "bowmanBrothers",
    email: "bowman@yahoo.com",
    password: "bowman01"
  },
]

const seedUsers = () => User.bulkCreate(userSeeds);

module.exports = seedUsers;