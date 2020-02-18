/**
 * service that gives us api to the users table
 */

class UserService {
    constructor() {
        this.users = [];
    }

    getUsers() {
        return this.users;
    }

    getSingleUser(id) {
        return this.users.find((singUser) => singUser.id == id);
    }

    addUser(user) {
        this.users.push(user);
        return user;
    }
}

module.exports = new UserService();