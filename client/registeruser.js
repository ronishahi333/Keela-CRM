// // Import Meteor's call method
// import { Meteor } from 'meteor/meteor';

// // Handle form submission
// async function registerUser() {
//   const userData = {
//     organization: 'Social Donation',
//     fullname: 'Marcus Stoinis',
//     email: 'name@company.com',
//     password: 'userpassword',
//   };

//   try {
//     // Call the 'user.register' method defined on the server
//     const userId = await Meteor.callPromise('user.register', userData);

//     // Registration successful
//     console.log(`User registered with ID: ${userId}`);
//     // Optionally, you can perform a redirect or show a success message
//   } catch (error) {
//     console.error(error);
//     // Handle errors
//   }
// }
