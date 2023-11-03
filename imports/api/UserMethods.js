import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
  insertUser(user) {
    if (!Accounts.findUserByEmail(user.email)) {
      Accounts.createUser(user);
    } else {
      throw new Meteor.Error('Email already exists')
    }
  },

  deleteUser(userId) {
    Meteor.users.remove(userId);
    return 'User deleted successfully';
  },

  updateUser(data) {
    Meteor.users.update(data._id, {
        $set: {
           ...data,
        },
    })
  }
});
