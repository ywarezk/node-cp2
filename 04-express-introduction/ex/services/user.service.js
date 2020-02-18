/**
 * service that gives us api to the users table
 */

class UserService {
    constructor() {
        this.users = [];

        this.getUsers = this.getUsers.bind(this);
        this.getSingleUser = this.getSingleUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    getUsers() {
        return this.users;
    }

    getSingleUser(id) {
        return this.users.find((singUser) => singUser.id == id);
    }

    updateUser(user) {
        const userToUpdate = this.users.find((singleUser) => singleUser.id == user.id);
        Object.assign(userToUpdate, user);
        return userToUpdate;
    }

    addUser(user) {
        this.users.push(user);
        return user;
    }
}

module.exports = new UserService();