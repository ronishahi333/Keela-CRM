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
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import bcrypt from 'bcrypt';

Meteor.methods({
  'user.register'(userData) {
    // Validate user data (e.g., check for duplicates, validate fields)

    // Hash the user's password
    const hashedPassword = bcrypt.hashSync(userData.password, 10);

    // Create a new user document and insert it into MongoDB
    const userId = Accounts.createUser({
      email: userData.email,
      password: hashedPassword,
      profile: {
        organization: userData.organization,
        fullname: userData.fullname,
      },
    });

    // Optionally, send a verification email if using the 'email' package
    // Meteor.users.update(userId, { $set: { 'emails.0.verified': true } });

    return userId;
  },
});
