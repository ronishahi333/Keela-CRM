import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

import { Contacts } from "../imports/api/Contactcollection";
import Contactmethods from "../imports/api/Contactmethods";

import { Tags } from "../imports/api/Tagcollection";
import Tagmethods from "../imports/api/Tagmethods";

import { Organizations } from "../imports/api/Orgcollections";
import Orgmethods from "../imports/api/Orgmethods";

import UserMethods from "../imports/api/UserMethods";

Meteor.startup(() => {
  Meteor.methods({
    "user.register"(userData) {
      const userId = Accounts.createUser({
        ...userData,
      });

      return userId;
    },
  });
});

Meteor.publish("contactsPublication", function () {
  if (!this.userId) {
    return this.ready();
  }

  return Contacts.find();
});

Meteor.publish("tagsPublication", function () {
  return Tags.find();
});

Meteor.publish("orgPublication", function () {
  return Organizations.find();
});

Meteor.publish("users", function () {
  return Meteor.users.find({});
});
