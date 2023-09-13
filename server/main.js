// import { Meteor } from "meteor/meteor";
// import { Accounts } from "meteor/accounts-base";
// import { LinksCollection } from "/imports/api/links";

// const SEED_USERNAME = "Ronnie";
// const SEED_PASSWORD = "Ronnie";

// Meteor.startup(() => {
//   if (!Accounts.findUserByUsername(SEED_USERNAME)) {
//     Accounts.createUser({
//       username: SEED_USERNAME,
//       password: SEED_PASSWORD,
//     });
//   }
// });

// async function insertLink({ title, url }) {
//   await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
// }

// Meteor.startup(async () => {
//   // If the Links collection is empty, add some data.
//   if ((await LinksCollection.find().countAsync()) === 0) {
//     await insertLink({
//       title: "Do the Tutorial",
//       url: "https://vuejs.org/guide/quick-start.html",
//     });

//     await insertLink({
//       title: "Follow the Guide",
//       url: "https://guide.meteor.com",
//     });

//     await insertLink({
//       title: "Read the Docs",
//       url: "https://docs.meteor.com",
//     });

//     await insertLink({
//       title: "Discussions",
//       url: "https://forums.meteor.com",
//     });
//   }
// });

// server/methods.js
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

import { Contacts } from "../imports/api/Contactcollection";
import Contactmethods from "../imports/api/Contactmethods";

import { Organizations } from "../imports/api/Orgcollections";
import Orgmethods from "../imports/api/Orgmethods";

import UserMethods from "../imports/api/UserMethods";

Meteor.startup(() => {
  Meteor.methods({
    "user.register"(userData) {
      // Validate user data (e.g., check for duplicates, validate fields)

      // Create a new user document and insert it into MongoDB
      const userId = Accounts.createUser({
        ...userData
        // email: userData.email,
        // password: userData.password,
        // profile: {
        //   organization: userData.organization,
        //   fullname: userData.fullname,
        //   organizationId: userData.I
        // },
      });

      return userId;
    },
  });
});

Meteor.publish("contactsPublication", function () {
  if (!this.userId) {
    return this.ready(); // Return an empty result for non-logged-in users
  }

  return Contacts.find();
});

Meteor.publish("orgPublication", function(){
  return Organizations.find();
})

Meteor.publish('users', function () {
  return Meteor.users.find({});
});