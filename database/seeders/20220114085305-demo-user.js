"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "User",
      [
        {
          id: 1,
          name: "user1",
          email: "user1@test.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "user2",
          email: "user2@test.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "user3",
          email: "user3@test.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
