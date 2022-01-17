const { User } = require('./models');

let service = {};

service.createUser = async (body) => {
    const user = await User.create(body);

    return user;
}

module.exports = service;