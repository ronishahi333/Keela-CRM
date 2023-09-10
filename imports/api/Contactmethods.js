// methods.js
import { Meteor } from 'meteor/meteor';
import { Contacts } from './Contactcollection';

Meteor.methods({
  'contacts.insert'(contactData) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized', 'You must be logged in to add contacts.');
    }

    const contactId = Contacts.insert(contactData);
    return contactId;
  },
});
